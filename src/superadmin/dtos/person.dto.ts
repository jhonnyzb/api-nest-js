import { PartialType, ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsDefined,
  IsISO8601,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  MaxDate,
} from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 15)
  @ApiProperty()
  readonly document: string;

  @IsDefined()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  documentTypeId: number;

  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  surname: string;

  @IsOptional()
  @IsString()
  @Length(2, 30)
  @ApiProperty()
  secondSurname: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  name: string;

  @IsOptional()
  @IsString()
  @Length(2, 30)
  @ApiProperty()
  secondName: string;

  @IsDefined()
  @IsDateString()
  @Length(10, 10)
  birthDate: Date;

  @IsOptional()
  @IsString()
  cityName?: string;

  @IsDefined()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  genderId: number;

  @IsDefined()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  ethnicityId: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  cityId?: number;

  @IsDefined()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  countryId: number;
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
