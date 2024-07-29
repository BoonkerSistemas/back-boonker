import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';


export class CreateUnitDto {


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  project: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  customer: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  customerHistory: [];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  observation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  documentationProject: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  active: boolean;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  picture: string;

}
