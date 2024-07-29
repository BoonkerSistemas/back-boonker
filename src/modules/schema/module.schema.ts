import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { number } from 'joi';
import * as Module from 'module';
export type ModulesDocument = Modules & Document;
@Schema({
  timestamps: true,
})
export class Modules extends Document {

  @Prop({ type: String, required: false })
  module: string;

  @Prop({ type: String, required: false })
  project: string;

  @Prop({ type: Date, required: true })
  startDate: Date;


  @Prop({ type: Boolean, required: false })
  active: boolean;

  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  updatedAt: string;

  @Prop({ nullable: true , required: false})
  purchaseOrder: string[];


}

export const ModulesSchema = SchemaFactory.createForClass(Modules);
