import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { number } from 'joi';
export type ProjectDocument = Project & Document;
@Schema({
  timestamps: true,
})
export class Project extends Document {

  @Prop({ type: String, required: false })
  name: string;

  @Prop({ type: String, required: false })
  type: string;

  @Prop({ type: String, required: true })
  location: string;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: Number, required: false })
  m2: number;

  @Prop({ type: Number, required: false })
  modules: number;

  @Prop({ type: String, required: false })
  observation: string;

  @Prop({ required: true })
  personResponsible: string[];


  @Prop({ required: true })
  module: string[];

  @Prop({ required: true })
  documentationProject: string[];

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  ruc: string;

  @Prop({ type: Boolean, required: false })
  active: boolean;

  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  updatedAt: string;

  @Prop({ nullable: true })
  picture: string;

  @Prop({ nullable: true })
  client: [{}];

}

export const ProjectSchema = SchemaFactory.createForClass(Project);
