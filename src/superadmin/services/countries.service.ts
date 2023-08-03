import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateGeneralDto,
  UpdateGeneralDto,
} from 'src/superadmin/dtos/general.dto';
import { Country } from 'src/superadmin/entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countryRepo: Repository<Country>,
  ) {}

  findAll() {
    return this.countryRepo.find();
  }

  async findById(id: number) {
    const item = await this.countryRepo.findOneBy({ id: id });
    if (!item) throw new NotFoundException(`Country # ${id} not found`);
    return item;
  }

  async create(payload: CreateGeneralDto) {
    const newCounty = this.countryRepo.create(payload);
    return this.countryRepo.save(newCounty);
  }

  async update(id: number, changes: UpdateGeneralDto) {
    const item = await this.findById(id);
    this.countryRepo.merge(item, changes);
    return this.countryRepo.save(item);
  }

  async remove(id: number) {
    const item = await this.findById(id);
    if (item) return this.countryRepo.delete(id);
  }
}
