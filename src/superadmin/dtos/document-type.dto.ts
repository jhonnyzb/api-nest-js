import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Siglas del tipo de documento' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descripción del tipo de documento' })
  readonly description: string;
}

export class UpdateDocumentTypeDto extends PartialType(CreateDocumentTypeDto) {}
