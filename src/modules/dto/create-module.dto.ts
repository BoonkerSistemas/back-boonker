import {
  IsBoolean, IsDate,
  IsNotEmpty, IsNumber,
  IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import { Prop } from '@nestjs/mongoose';

export class CreateModuleDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly module: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly project: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly startDate: Date;


  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;





}

