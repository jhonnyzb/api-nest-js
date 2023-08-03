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
import { EpsService } from 'src/superadmin/services/eps.service';

@ApiTags('eps')
@Controller('eps')
export class EpsController {
  constructor(private readonly service: EpsService) {}

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
