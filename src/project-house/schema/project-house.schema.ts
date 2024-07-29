import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { number } from 'joi';
export type ProjectHouseDocument = ProjectHouse & Document;
@Schema({
  timestamps: true,
})
export class ProjectHouse extends Document {

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  job: string;

  @Prop({ type: Boolean, required: false })
  active: boolean;

  @Prop({  required: false })
  email: string;

  @Prop({  required: false })
  visit: string;

  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  updatedAt: string;

  @Prop({ nullable: true })
  picture: string;

  @Prop({ nullable: true })
  client: [{}];

}

export const ProjectHouseSchema = SchemaFactory.createForClass(ProjectHouse);
