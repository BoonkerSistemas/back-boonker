import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type BoonkerIntWarehouseDocument = BoonkerIntWarehouse & Document;
@Schema({
  timestamps: true,
  collection: "boonker-warehouse",
})

export class BoonkerIntWarehouse {


  @Prop({ required: true })
  descripcion: string

  @Prop({  required: true })
  ubicacion : string

  @Prop({  required: true })
  responsable: string

  @Prop({ type: String, required: true })
  codigoInterno: string


  @Prop({nullable: true})
  createdAt: string;

  @Prop({nullable: true})
  updatedAt: string;

  @Prop({ required: false, nullable: true, default: null })
  deletedAt: Date


}
export const BoonkerIntWarehouseSchema = SchemaFactory.createForClass(BoonkerIntWarehouse);


