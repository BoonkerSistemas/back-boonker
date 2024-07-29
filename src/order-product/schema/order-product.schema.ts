import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
export type OrderProductDocument = OrderProduct & Document;
@Schema({
  timestamps: true,
  collection: "orderProduct"
})

export class OrderProduct {


  @Prop({ required: true })
  subtotal: number

  @Prop({  required: true })
  iva: number

  @Prop({  required: true })
  total: number

  @Prop({ type: String, required: true })
  project: string

  @Prop({ required: true })
  detalle: []

  @Prop({ required: true })
  dinteles: []

  @Prop({nullable: true})
  createdAt: string;

  @Prop({nullable: true})
  updatedAt: string;

  @Prop({ required: false, nullable: true, default: null })
  deletedAt: Date


}
export const OrderProductSchema = SchemaFactory.createForClass(OrderProduct);


