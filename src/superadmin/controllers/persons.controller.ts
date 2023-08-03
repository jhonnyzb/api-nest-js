import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PersonsService } from '../services/persons.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePersonDto, UpdatePersonDto } from '../dtos/person.dto';

@ApiTags('persons')
@Controller('persons')
export class PersonsController {
  constructor(private readonly service: PersonsService) {}
  @Get('get-search')
  findSearch(@Query('search') search: string) {
    return this.service.findSearch(search);
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() payload: CreatePersonDto) {
    console.log('payload CreatePersonDto:', payload);
    return this.service.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePersonDto,
  ) {
    return this.service.update(id, payload);
  }
}
