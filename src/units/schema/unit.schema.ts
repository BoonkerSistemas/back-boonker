import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
export type UnitsDocument = Units & Document;
@Schema({
  timestamps: true,
})
export class Units extends Document {

  @Prop({ type: String, required: false })
  name: string;

  @Prop({ type: String, required: false })
  project: string;

  @Prop({ type: String, required: true })
  customer: string;

  @Prop({  required: true })
  customerHistory: [];

  @Prop({ type: String, required: false })
  observation: string;

  @Prop({ required: true })
  documentationProject: string[];

  @Prop({ required: true })
  status: string;

  @Prop({ type: Boolean, required: false })
  active: boolean;


  @Prop({ nullable: true })
  updatedAt: string;

  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  picture: string;


}

export const UnitsSchema = SchemaFactory.createForClass(Units);

