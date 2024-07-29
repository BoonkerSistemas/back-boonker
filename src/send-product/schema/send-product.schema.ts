import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SendProductDocument = SendProduct & Document;

@Schema({
  timestamps: true,
})
export class SendProduct extends Document {

  @Prop({ type: [], required: false })
  purchaseOrder: [];

  @Prop({ type: [], required: false })
  order:  string;

  @Prop({  required: false })
  orderId:  string;

  @Prop({  required: false })
  projectId:  string;

  @Prop({ type: [], required: true })
  dateGenerate: Date;

  @Prop({  required: true })
  iva: number;

  @Prop({  required: true })
  subtotal: number;

  @Prop({  required: true })
  total: number;

  @Prop({  required: true })
  saldo: number;

  @Prop({  required: true })
  m2Despachados: number;

  @Prop({  required: true })
  m2PorDespachados: number;

  @Prop({  required: true })
  amortizacion: number;

  @Prop({  required: true })
  pagar: number;

  @Prop({ type: String, required: true })
  dateApproval: string;

  @Prop({ required: false })
  datePay: Date;

  @Prop({ type: String, required: false })
  status: string;

  @Prop({ type: Boolean, required: false })
  active: boolean;

  @Prop({  required: false })
  commets: string;

  @Prop({ nullable: true })
  createdAt: Date;

  @Prop({ nullable: true })
  updatedAt: Date;
}

export const SendProductSchema = SchemaFactory.createForClass(SendProduct);
