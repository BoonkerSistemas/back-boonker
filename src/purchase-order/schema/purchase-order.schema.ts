import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PurchaseOrderDocument = PurchaseOrder & Document;

@Schema({
  timestamps: true,
})
export class PurchaseOrder extends Document {

  @Prop({ type: String, required: false })
  code: string;

  @Prop({ type: [], required: false })
  purchaseOrder: [];

  @Prop({ type: [], required: true })
  section: [];

  @Prop({ type: String, required: true })
  module: string;

  @Prop({ required: false })
  status: string;

  @Prop({ type: Boolean, required: false })
  active: boolean;

  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  updatedAt: string;


}

export const PurchaseOrderSchema = SchemaFactory.createForClass(PurchaseOrder);
