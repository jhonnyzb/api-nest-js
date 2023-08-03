import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { ModuleService } from '../services/module.service';
import { Module } from '../entities/module.entity';
import { CreateModuleDto, UpdateModuleDto } from "../dtos/module.dto";

@ApiTags('modules')
@Controller('modules')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Get()
  all(): Promise<Module[]> {
    return this.moduleService.findAll();
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number): Promise<Module> {
    return this.moduleService.findById(+id);
  }

  @Post()
  create(@Body() payload: CreateModuleDto): Promise<Module> {
    return this.moduleService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateModuleDto,
  ): Promise<Module> {
    return this.moduleService.update(+id, payload);
  }

  @Delete(':id')
  disabled(@Param('id', ParseIntPipe) id: number) {
    return this.moduleService.disable(id);
  }
}
