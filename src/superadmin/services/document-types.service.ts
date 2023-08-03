import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateDocumentTypeDto,
  UpdateDocumentTypeDto,
} from 'src/superadmin/dtos/document-type.dto';
import { DocumentType } from 'src/superadmin/entities/document-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentTypesService {
  constructor(
    @InjectRepository(DocumentType)
    private documentTypeRepo: Repository<DocumentType>,
  ) {}

  async findById(id: number) {
    const item = await this.documentTypeRepo.findOneBy({ id: id });
    if (!item) throw new NotFoundException(`Document type # ${id} not found`);
    return item;
  }

  create(payload: CreateDocumentTypeDto) {
    const newItem = this.documentTypeRepo.create(payload);
    return this.documentTypeRepo.save(newItem);
  }

  async update(id: number, changes: UpdateDocumentTypeDto) {
    const item = await this.findById(id);
    this.documentTypeRepo.merge(item, changes);
    return this.documentTypeRepo.save(item);
  }

  remove(id: number) {
    return this.documentTypeRepo.delete(id);
  }
}
