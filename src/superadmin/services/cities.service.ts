import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCityDto, UpdateCityDto } from 'src/superadmin/dtos/city.dto';
import { City } from 'src/superadmin/entities/city.entity';
import { Repository } from 'typeorm';
import { CountriesService } from './countries.service';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City) private cityRepo: Repository<City>,
    private countriesService: CountriesService,
  ) {}

  findAll() {
    return this.cityRepo.find();
  }

  async findById(id: number) {
    const item = await this.cityRepo.findOne({
      relations: {
        country: true,
      },
      where: {
        id: id,
      },
    });
    if (!item) throw new NotFoundException(`City # ${id} not found`);
    return item;
  }

  findByCountryId(countryId: number) {
    return this.cityRepo.find({ where: { country: { id: countryId } } });
  }

  async create(payload: CreateCityDto) {
    const countryAux = await this.countriesService.findById(payload.countryId);
    const newCity = new City();
    newCity.name = payload.name;
    newCity.country = countryAux;
    const aux = this.cityRepo.create(newCity);
    return this.cityRepo.save(aux);
  }

  async update(id: number, changes: UpdateCityDto) {
    const item = await this.findById(id);
    if (changes.countryId) {
      const countryAux = await this.countriesService.findById(
        changes.countryId,
      );
      item.country = countryAux;
    }
    this.cityRepo.merge(item, changes);
    return this.cityRepo.save(item);
  }

  async remove(id: number) {
    const item = await this.findById(id);
    if (item) return this.cityRepo.delete(id);
  }
}
