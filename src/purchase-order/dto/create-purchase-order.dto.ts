import {
  IsBoolean, IsDate,
  IsNotEmpty, IsNumber,
  IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import { Prop } from '@nestjs/mongoose';

export class CreatePurchaseOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly purchaseOrder: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly section: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly module: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly status: string;




}

