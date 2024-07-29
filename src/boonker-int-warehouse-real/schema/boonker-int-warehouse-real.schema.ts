import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type BoonkerIntWarehouseRealDocument = BoonkerIntWarehouseReal & Document;
@Schema({
  timestamps: true,
  collection: "boonker-warehouse-real",
})

export class BoonkerIntWarehouseReal {


  @Prop({ required: true })
  descripcion: string

  @Prop({  required: true })
  formaPago: string

  @Prop({  required: true })
  cantidad: number

  @Prop({  required: true })
  unidad: number

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
export const BoonkerIntWarehouseRealSchema = SchemaFactory.createForClass(BoonkerIntWarehouseReal);


