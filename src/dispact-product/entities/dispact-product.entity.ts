import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class DispatchProduct extends Document {

  @Prop({ type: String, required: false })
  type: string;

  @Prop({ type: String, required: false })
  category: string;

  @Prop({ type: String, required: false })
  orifice: string;


  @Prop({ type: String, required: false })
  spare: string;


  @Prop({ required: false })
  date: Date;

  @Prop({ type: String, required: false })
  endurance: string;

  @Prop({ type: String, required: false })
  code: string;

  @Prop({ type: String, required: false })
  project: string;

  @Prop({ type: String, required: false })
  drive: string;


  @Prop({ type: String, required: false })
  plate: string;


  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  updatedAt: string;
}


export const DispatchProductSchema = SchemaFactory.createForClass(DispatchProduct);

