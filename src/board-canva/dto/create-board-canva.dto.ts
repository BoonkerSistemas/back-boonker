import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Prop } from '@nestjs/mongoose';

export class CreateBoardCanvaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  week: number;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  plate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  block: [];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  grout: [];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  morteros: [];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dintel: [];


  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  product: [];


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly client: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly direction: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly driver: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly m2: number;


  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly mpa: number;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly morterosCat: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly dinteles: boolean;


  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly confirmation: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly personUpdate: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly updatedAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly deletedAt: Date;


}





