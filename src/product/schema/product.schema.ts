import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
export type ProductDocument = Product & Document;
@Schema({
  timestamps: true,
  collection: "product"
})

export class Product {


  @Prop({ required: true })
  CODIGO: string

  @Prop({ type: String, required: true })
  DESCRIPCION: string

  @Prop({ type: String, required: false })
  PRECIO2024: string

  @Prop({ type: String, required: false })
  PRECIO2023: string

  @Prop({ type: String, required: false })
  PRECIO2022: string

  @Prop({ type: String, required: true })
  UNIDAD: string

  @Prop({nullable: true})
  createdAt: string;

  @Prop({nullable: true})
  updatedAt: string;

  @Prop({ required: false, nullable: true, default: null })
  deletedAt: Date


}
export const ProductSchema = SchemaFactory.createForClass(Product);


