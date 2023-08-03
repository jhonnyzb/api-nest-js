import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locality } from 'src/superadmin/entities/locality.entity';
import {
  CreateGeneralDto,
  UpdateGeneralDto,
} from 'src/superadmin/dtos/general.dto';

@Injectable()
export class LocalitiesService {
  constructor(@InjectRepository(Locality) private repo: Repository<Locality>) {}

  findAll() {
    return this.repo.find();
  }

  create(payload: CreateGeneralDto) {
    const newItem = this.repo.create(payload);
    return this.repo.save(newItem);
  }

  async update(id: number, changes: UpdateGeneralDto) {
    console.log(changes);
    const item = await this.repo.findOneBy({ id });
    if (!item) throw new NotFoundException(`Locality # ${id} not found`);
    this.repo.merge(item, changes);
    return this.repo.save(item);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
