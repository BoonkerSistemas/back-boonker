import {
  IsBoolean, IsDate,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateClientDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @ApiProperty()
  @IsString()
  readonly phoneComercial: string;


  @ApiProperty()
  @IsString()
  readonly emailPersonal: string;


  @ApiProperty()
  @IsString()
  readonly emailWork: string;


  @ApiProperty()
  @IsString()
  readonly ruc: string;

  @ApiProperty()
  @IsString()
  readonly rol: string;


  @ApiProperty()
  @IsString()
  readonly project: string;

  @ApiProperty()
  @IsString()
  readonly active: boolean;


  @ApiProperty()
  @IsString()
  readonly picture: string;



  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly createdAt: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly updatedAt: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  readonly deletedAt: string;

}

