import {
  IsBoolean, IsDate,
  IsNotEmpty, IsNumber, IsObject,
  IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateOrderProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly subtotal: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly iva: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly total: number;

  @ApiProperty()
  @IsObject()
  readonly detalle: object;

  @ApiProperty()
  @IsObject()
  readonly dinteles: object;


  @ApiProperty()
  @IsString()
  readonly project: string;


}

