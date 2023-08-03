import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  CreateGeneralDto,
  UpdateGeneralDto,
} from 'src/superadmin/dtos/general.dto';
import { EthnicitiesService } from '../services/ethnicities.service';

@ApiTags('ethnicities')
@Controller('ethnicities')
export class EthnicitiesController {
  constructor(private readonly service: EthnicitiesService) {}

  @Get(':id')
  getByCountry(@Param('id', ParseIntPipe) countryId: number) {
    return this.service.findById(countryId);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() payload: CreateGeneralDto) {
    return this.service.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateGeneralDto,
  ) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
