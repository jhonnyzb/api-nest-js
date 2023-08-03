import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateGeneralDto,
  UpdateGeneralDto,
} from 'src/superadmin/dtos/general.dto';
import { Eps } from 'src/superadmin/entities/eps.entity';
import { Repository } from 'typeorm';
@Injectable()
export class EpsService {
  constructor(@InjectRepository(Eps) private repo: Repository<Eps>) {}

  findAll() {
    return this.repo.find();
  }

  create(payload: CreateGeneralDto) {
    const newItem = this.repo.create({ name: payload.name, status: 1 });
    return this.repo.save(newItem);
  }

  async update(id: number, changes: UpdateGeneralDto) {
    const item = await this.repo.findOneBy({ id });
    if (!item) throw new NotFoundException(`EPS # ${id} not found`);
    this.repo.merge(item, changes);
    return this.repo.save(item);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
