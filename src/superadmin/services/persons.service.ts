import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Person } from '../entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Not, Repository } from 'typeorm';
import { CreatePersonDto, UpdatePersonDto } from '../dtos/person.dto';
import { CountriesService } from './countries.service';
import { DocumentTypesService } from './document-types.service';
import { CitiesService } from './cities.service';
import { GendersService } from './genders.service';
import { EthnicitiesService } from './ethnicities.service';

@Injectable()
export class PersonsService {
  static readonly COLOMBIA_COUNTRY_ID = 41;
  constructor(
    @InjectRepository(Person) private repo: Repository<Person>,
    private countriesService: CountriesService,
    private citiesService: CitiesService,
    private documentTypesService: DocumentTypesService,
    private ethnicitiesService: EthnicitiesService,
    private gendersService: GendersService,
  ) {}

  async findById(id: number) {
    const item = await this.repo.findOneBy({ id: id });
    if (!item) throw new NotFoundException(`Person # ${id} not found`);
    return item;
  }

  async findByDocument(document: string) {
    const item = await this.repo.findOneBy({ document });
    if (!item)
      throw new NotFoundException(
        `Person with document # ${document} not found`,
      );
    return item;
  }

  async findSearch(search: string) {
    const item = await this.repo.find({
      where: [
        { document: Like(`%${search}%`) },
        { name: Like(`%${search}%`) },
        { secondName: Like(`%${search}%`) },
        { surname: Like(`%${search}%`) },
        { secondSurname: Like(`%${search}%`) },
      ],
    });
    return item;
  }

  async create(payload: CreatePersonDto) {
    if (payload.countryId === PersonsService.COLOMBIA_COUNTRY_ID) {
      if (!payload.cityId)
        throw new NotFoundException(
          `When the country is Colombia you must send an cityId`,
        );
      await this.citiesService.findById(payload.cityId);
      payload.cityName = '';
    } else {
      if (!payload.cityName)
        throw new NotFoundException(
          `When the country is not Colombia you must send an cityName`,
        );
      payload.cityId = null;
    }

    await this.documentTypesService.findById(payload.documentTypeId);
    await this.ethnicitiesService.findById(payload.ethnicityId);
    await this.gendersService.findById(payload.genderId);

    const auxPerson = await this.repo.findOneBy({ document: payload.document });
    if (auxPerson)
      throw new BadRequestException(
        `There is a person with document ${payload.document} `,
      );

    const newItem = this.repo.create(payload);
    return this.repo.save(newItem);
  }

  async update(id: number, changes: UpdatePersonDto) {
    if (changes.countryId)
      await this.countriesService.findById(changes.countryId);
    if (changes.documentTypeId)
      await this.documentTypesService.findById(changes.documentTypeId);
    if (changes.ethnicityId)
      await this.ethnicitiesService.findById(changes.ethnicityId);
    if (changes.genderId) await this.gendersService.findById(changes.genderId);
    if (changes.cityId) await this.citiesService.findById(changes.cityId);

    if (changes.document) {
      const changeDocumentValidate = await this.repo.findOne({
        where: { document: changes.document, id: Not(id) },
      });
      if (changeDocumentValidate) {
        throw new BadRequestException(
          `The document ${changes.document} is assigned to someone else `,
        );
      }
    }
    const itemUpdate = await this.findById(id);
    if (itemUpdate) {
      this.repo.merge(itemUpdate, changes);
      return this.repo.save(itemUpdate);
    }
  }
}
