import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre' })
  readonly name: string;
}

export class UpdateGenderDto extends PartialType(CreateGenderDto) {}
