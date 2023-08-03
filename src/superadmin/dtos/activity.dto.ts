import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateActivityDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 200)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 200)
  @ApiProperty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  moduleId: number;
}

export class UpdateActivityDto extends PartialType(CreateActivityDto) {}
