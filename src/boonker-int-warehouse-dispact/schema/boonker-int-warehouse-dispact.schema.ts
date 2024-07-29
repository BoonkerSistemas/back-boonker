import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
export type BoonkerIntWarehouseDispactDocument = BoonkerIntWarehouseDispact & Document;
@Schema({
  timestamps: true,
  collection: "boonker-warehouse-dispact",
})

export class BoonkerIntWarehouseDispact {


  @Prop({ required: true })
  descripcion: string

  @Prop({  required: true })
  formaPago: number

  @Prop({  required: true })
  cantidad: number

  @Prop({ type: String, required: true })
  unidad: string

  @Prop({ required: true })
  canalCompra: string

  @Prop({ required: true })
  bodega: string

  @Prop({ required: true })
  tipo: string

  @Prop({nullable: true})
  createdAt: string;

  @Prop({nullable: true})
  updatedAt: string;

  @Prop({ required: false, nullable: true, default: null })
  deletedAt: Date


}
export const BoonkerIntWarehouseDispactSchema = SchemaFactory.createForClass(BoonkerIntWarehouseDispact);


