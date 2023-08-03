import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BloodGroup } from 'src/superadmin/entities/blood-group.entity';
import {
  CreateGeneralDto,
  UpdateGeneralDto,
} from 'src/superadmin/dtos/general.dto';

@Injectable()
export class BloodGroupsService {
  constructor(
    @InjectRepository(BloodGroup)
    private bloodGroupRepo: Repository<BloodGroup>,
  ) {}

  findAll() {
    return this.bloodGroupRepo.find();
  }

  create(payload: CreateGeneralDto) {
    const newGender = this.bloodGroupRepo.create(payload);
    return this.bloodGroupRepo.save(newGender);
  }

  async update(id: number, changes: UpdateGeneralDto) {
    const item = await this.bloodGroupRepo.findOneBy({ id });
    if (!item) throw new NotFoundException(`Blood group # ${id} not found`);
    this.bloodGroupRepo.merge(item, changes);
    return this.bloodGroupRepo.save(item);
  }

  remove(id: number) {
    return this.bloodGroupRepo.delete(id);
  }
}
