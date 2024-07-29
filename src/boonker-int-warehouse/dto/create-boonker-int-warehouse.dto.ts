

import {
  IsBoolean, IsDate,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateBoonkerIntWarehouseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly descripcion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly ubicacion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly responsable: string;

  @ApiProperty()
  @IsString()
  readonly codigoInterno: string;


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

