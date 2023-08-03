import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateModuleDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @Length(1, 191)
  @ApiProperty()
  area: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  @ApiProperty()
  redirect: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  @ApiProperty()
  image: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  state: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  missionary: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  compatible: number;
}

export class UpdateModuleDto extends PartialType(CreateModuleDto) {}
