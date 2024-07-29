import {
  IsBoolean, IsDate,
  IsNotEmpty, IsNumber,
  IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import { BoonkerIntWarehouseReal } from '../schema/boonker-int-warehouse-real.schema';

export class CreateBoonkerIntWarehouseRealDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly descripcion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly formaPago: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly cantidad: number;

  @ApiProperty()
  @IsNumber()
  readonly unidad: number;


  @ApiProperty()
  @IsString()
  readonly canalCompra: string;


  @ApiProperty()
  @IsString()
  readonly bodega: string;


  @ApiProperty()
  @IsString()
  readonly tipo: string;


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

