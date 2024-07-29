import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoonkerIntWarehouseIncomeDocument = BoonkerIntWarehouseIncome & Document;

@Schema({
  timestamps: true,
  collection: 'boonker-warehouse-income',
})

export class BoonkerIntWarehouseIncome {


  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  formaPago: string;

  @Prop({ required: true })
  cantidad: number;

  @Prop({ required: true })
  unidad: number;

  @Prop({ required: true })
  canalCompra: string;

  @Prop({ required: true })
  bodega: string;

  @Prop({ required: true })
  tipo: string;

  @Prop({ required: true })
  guia: string;

  @Prop({ required: true })
  factura: string;


}

export const BoonkerIntWarehouseIncomeSchema = SchemaFactory.createForClass(BoonkerIntWarehouseIncome);


