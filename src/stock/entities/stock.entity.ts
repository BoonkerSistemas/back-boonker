import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Stock extends Document {

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

  @Prop({  required: false })
  palet: number;

  @Prop({ type: String, required: false })
  code: string;

  @Prop({ required: false })
  day: string;

  @Prop({ type: String, required: false })
  month: string;

  @Prop({ type: String, required: false })
  year: string;

  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  updatedAt: string;
}


export const StockSchema = SchemaFactory.createForClass(Stock);
