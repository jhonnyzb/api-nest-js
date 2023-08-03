import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre de la ciudad' })
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Id del país al que pertenece la ciudad' })
  readonly countryId: number;
}

export class UpdateCityDto extends PartialType(CreateCityDto) {}
