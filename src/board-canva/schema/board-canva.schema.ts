import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { number } from 'joi';
export type BoardCanvaDocument = BoardCanva & Document;
@Schema({
  timestamps: true,
})
export class BoardCanva extends Document {

  @Prop({  required: true })
  date: Date;

  @Prop({  required: true })
  week: number;

  @Prop({ type: String })
  client: string;

  @Prop({ type: String, required: false })
  direction: string;

  @Prop({ required: false })
  newBloc: boolean;

  @Prop({  required: false })
  driver: string;

  @Prop({ nullable: true })
  dinteles: boolean;

  @Prop({ nullable: true })
  status: string;

  @Prop({ nullable: true })
  plate: string;

  @Prop({ nullable: true })
  block: [];

  @Prop({ nullable: true })
  grout: [];

  @Prop({ nullable: true })
  morteros: [];

  @Prop({ nullable: true })
  dintel: string[];


  @Prop({ nullable: true })
  confirmation: boolean;

  @Prop({ nullable: true })
  updateAt: boolean;

  @Prop({ nullable: true })
  personUpdate: string;

}

export const BoardCanvaSchema = SchemaFactory.createForClass(BoardCanva);

