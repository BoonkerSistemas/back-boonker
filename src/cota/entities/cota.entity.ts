import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
export type CotaDocument = Cota & Document;
@Schema({
  timestamps: true,
  collection: "cota"
})



export class Cota {



  @Prop({   })
  value: string[]



  @Prop({nullable: true})
  createdAt: string;

  @Prop({nullable: true})
  updatedAt: string;

  @Prop({required: false, nullable: true})
  modifiedUserId: string;

  @Prop({required: false, nullable: true})
  deleteAt: string;


}
export const CotaSchema = SchemaFactory.createForClass(Cota);

