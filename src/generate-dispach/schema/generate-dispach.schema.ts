import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { number } from 'joi';
export type GenerateDispachDocument = GenerateDispach & Document;
@Schema({
  timestamps: true,
})
export class GenerateDispach extends Document {

  @Prop({  required: false })
  enviado: string[];

  @Prop({  required: false })
  porEnviar: string[];

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({  required: false })
  detalle: string[];

  @Prop({ type: String, required: false })
  observation: string[];

  @Prop({ required: true })
  module: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  guide: string;

  @Prop({ })
  comprobante: string;

  @Prop({ type: Boolean, required: false })
  active: boolean;

  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  updatedAt: string;


}

export const GenerateDispachSchema = SchemaFactory.createForClass(GenerateDispach);

