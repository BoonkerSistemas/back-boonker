import {ApiProperty} from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, IsObject, IsBoolean, IsDate } from 'class-validator';
import { Prop } from '@nestjs/mongoose';

export class CreateSendProductDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  readonly purchaseOrder: object;

  @ApiProperty()
  @IsObject()
  readonly order: object;

  @ApiProperty()
  @IsString()
  readonly orderId: string;

  @ApiProperty()
  @IsString()
  readonly projectId: string;

  @ApiProperty()
  @IsDate({})
  readonly dateGenerate: Date;

  @ApiProperty()
  @IsNumber({})
  readonly iva: number;

  @ApiProperty()
  @IsNumber({})
  readonly subtotal: number;

  @ApiProperty()
  @IsNumber({})
  readonly amortizacion: number;

  @ApiProperty()
  @IsNumber({})
  readonly pagar: number;

  @ApiProperty()
  @IsNumber({})
  readonly total: number;


  @ApiProperty()
  @IsString({})
  readonly dateApproval: string;

  @ApiProperty()
  @IsNumber({})
  saldo: number;

  @ApiProperty()
  @IsNumber({})
  m2Despachados: number;

  @ApiProperty()
  @IsNumber({})
  m2PorDespachados: number;


  @ApiProperty()
  @IsDate({})
  readonly datePay: Date;


  @ApiProperty()
  @IsString({})
  readonly status: string;


  @ApiProperty()
  @IsBoolean({})
  readonly active: boolean;


  @ApiProperty()
  @IsString({})
  readonly commets: string;

}
