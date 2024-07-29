import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Prop } from '@nestjs/mongoose';

export class CreateProjectHouseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly job: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly visit: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly createdAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly updatedAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly deletedAt: Date;


}


