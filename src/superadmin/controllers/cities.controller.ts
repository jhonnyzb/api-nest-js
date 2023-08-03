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

import { CreateCityDto, UpdateCityDto } from 'src/superadmin/dtos/city.dto';
import { CitiesService } from 'src/superadmin/services/cities.service';

@ApiTags('cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly service: CitiesService) {}

  @Get(':id')
  getById(@Param('id', ParseIntPipe) countryId: number) {
    return this.service.findById(countryId);
  }

  @Get('get-by-country/:countryId')
  getByCountry(@Param('countryId', ParseIntPipe) countryId: number) {
    return this.service.findByCountryId(countryId);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() payload: CreateCityDto) {
    return this.service.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCityDto,
  ) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
