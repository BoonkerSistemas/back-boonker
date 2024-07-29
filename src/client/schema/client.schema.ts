import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
export type ClientDocument = Client & Document;
@Schema({
  timestamps: true,
})
export class Client extends Document {

  @Prop({ type: String, required: false })
  name: string;

  @Prop({ type: String, required: false })
  lastName: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String, required: true })
  phoneComercial: string;

  @Prop({ type: String, required: false })
  emailPersonal: string;

  @Prop({ type: String, required: false })
  emailWork: string;

  @Prop({ type: String, required: false })
  ruc: string;

  @Prop({ required: true })
  rol: string[];


  @Prop({ required: true })
  project: string[];

  @Prop({ type: Boolean, required: false })
  active: boolean;

  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  updatedAt: string;

  @Prop({ nullable: true })
  picture: string;



}

export const ClientSchema = SchemaFactory.createForClass(Client);
