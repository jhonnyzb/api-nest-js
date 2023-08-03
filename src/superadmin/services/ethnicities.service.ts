import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateGeneralDto,
  UpdateGeneralDto,
} from 'src/superadmin/dtos/general.dto';
import { Repository } from 'typeorm';
import { Ethnicity } from '../entities/ethnicity.entity';

@Injectable()
export class EthnicitiesService {
  constructor(
    @InjectRepository(Ethnicity)
    private ethnicityRepo: Repository<Ethnicity>,
  ) {}

  findAll() {
    return this.ethnicityRepo.find();
  }

  async findById(id: number) {
    const item = await this.ethnicityRepo.findOneBy({ id: id });
    if (!item) throw new NotFoundException(`Ethnicity # ${id} not found`);
    return item;
  }

  async create(payload: CreateGeneralDto) {
    const newCounty = this.ethnicityRepo.create(payload);
    return this.ethnicityRepo.save(newCounty);
  }

  async update(id: number, changes: UpdateGeneralDto) {
    const item = await this.findById(id);
    this.ethnicityRepo.merge(item, changes);
    return this.ethnicityRepo.save(item);
  }

  async remove(id: number) {
    const item = await this.findById(id);
    if (item) return this.ethnicityRepo.delete(id);
  }
}
