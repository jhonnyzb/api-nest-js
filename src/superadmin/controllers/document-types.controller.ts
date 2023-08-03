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
  CreateDocumentTypeDto,
  UpdateDocumentTypeDto,
} from 'src/superadmin/dtos/document-type.dto';
import { DocumentTypesService } from 'src/superadmin/services/document-types.service';

@ApiTags('document-types')
@Controller('document-types')
export class DocumentTypesController {
  constructor(private readonly service: DocumentTypesService) {}
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() payload: CreateDocumentTypeDto) {
    return this.service.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() changes: UpdateDocumentTypeDto,
  ) {
    return this.service.update(id, changes);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
