import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpareProductDocument = SpareProduct & Document;

@Schema({
  timestamps: true,
})
export class SpareProduct extends Document {

  @Prop({ type: String, required: false })
  purchaseOrder: string;

  @Prop({ type: [], required: false })
  order: [];

  @Prop({ type: [], required: true })
  dateGenerate: [];

  @Prop({ type: [], required: true })
  iva: [];

  @Prop({ type: [], required: true })
  subtotal: [];

  @Prop({ type: [], required: true })
  total: [];

  @Prop({ type: String, required: true })
  dateApproval: string;

  @Prop({ required: false })
  datePay: string;

  @Prop({ type: Boolean, required: false })
  status: boolean;

  @Prop({ type: Boolean, required: false })
  active: boolean;

  @Prop({ type: Boolean, required: false })
  commets: boolean;

  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  updatedAt: string;
}

export const SpareProductSchema = SchemaFactory.createForClass(SpareProduct);
