import {
  IsBoolean, IsDate,
  IsNotEmpty, IsNumber,
  IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import { Prop } from '@nestjs/mongoose';

export class CreateProjectDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly location: string;

  @ApiProperty()
  @IsDate()
  readonly startDate: Date;


  @ApiProperty()
  @IsNumber()
  readonly m2: number;

  @ApiProperty()
  @IsNumber()
  readonly modules: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly observation: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly personResponsible: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly module: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly documentationProject: string;


  @Prop({ nullable: true })
  picture: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly ruc: string;

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

