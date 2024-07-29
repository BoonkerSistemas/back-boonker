import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
export type WebHookDocument = WebHook & Document;
@Schema({
  timestamps: true,
  collection: "book"
})

export class WebHook {


  @Prop({ required: true })
  value: string[];
  @Prop({ required: true })
  project: string;

  @Prop({  })
  s31: string;

  @Prop({nullable: true})
  createdAt: string;

  @Prop({nullable: true})
  updatedAt: string;

  @Prop({ required: false, nullable: true, default: null })
  deletedAt: Date


}
export const WebHookSchema = SchemaFactory.createForClass(WebHook);


