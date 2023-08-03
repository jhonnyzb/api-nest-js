import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Module } from '../entities/module.entity';
import { Repository } from 'typeorm';
import { CreateModuleDto, UpdateModuleDto } from '../dtos/module.dto';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Module)
    private moduleRepository: Repository<Module>,
  ) {}

  async findAll(): Promise<Module[]> {
    return this.moduleRepository.find({ where: { state: 1 } });
  }

  async findById(id: number): Promise<Module> {
    const module = await this.moduleRepository.findOne({
      where: { id },
      relations: ['activities'],
    });
    if (!module) {
      throw new NotFoundException('Module not found');
    }
    return module;
  }

  async create(moduleDto: CreateModuleDto): Promise<Module> {
    const module = await this.moduleRepository.findOne({
      where: { name: moduleDto.name },
    });
    if (module) {
      throw new HttpException(
        `module ${moduleDto.name} already exists`,
        HttpStatus.CONFLICT,
      );
    }
    const newModule = await this.moduleRepository.create(moduleDto);
    return this.moduleRepository.save(newModule);
  }

  async update(id: number, body: UpdateModuleDto): Promise<Module> {
    const module = {
      id,
      ...body,
    };
    const updateModule = await this.moduleRepository.preload(module);
    if (!updateModule) {
      throw new NotFoundException(`Module not found`);
    } else {
      return this.moduleRepository.save(updateModule);
    }
  }

  async disable(id: number) {
    const module = await this.moduleRepository.findOne({ where: { id } });
    if (module) {
      await this.moduleRepository.update(
        { id },
        {
          ...(module.state && { state: 0 }),
        },
      );
      return this.findById(id);
    }
    throw new NotFoundException('Module not found');
  }
}
