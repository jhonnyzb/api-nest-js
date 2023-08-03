import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGeneralDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre' })
  readonly name: string;
}

export class UpdateGeneralDto extends PartialType(CreateGeneralDto) {}
