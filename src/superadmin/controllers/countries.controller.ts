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
import { CountriesService } from 'src/superadmin/services/countries.service';

@ApiTags('countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly service: CountriesService) {}

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
