import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  CreateGenderDto,
  UpdateGenderDto,
} from 'src/superadmin/dtos/gender.dto';
import { Gender } from 'src/superadmin/entities/gender.entity';

@Injectable()
export class GendersService {
  constructor(
    @InjectRepository(Gender) private genderRepo: Repository<Gender>,
  ) {}
  findAll() {
    return this.genderRepo.find();
  }

  async findById(id: number) {
    const item = await this.genderRepo.findOneBy({ id: id });
    if (!item) throw new NotFoundException(`Gender # ${id} not found`);
    return item;
  }

  create(payload: CreateGenderDto) {
    const newGender = this.genderRepo.create(payload);
    return this.genderRepo.save(newGender);
  }

  async update(id: number, changes: UpdateGenderDto) {
    const item = await this.findById(id);
    this.genderRepo.merge(item, changes);
    return this.genderRepo.save(item);
  }

  remove(id: number) {
    return this.genderRepo.delete(id);
  }
}
