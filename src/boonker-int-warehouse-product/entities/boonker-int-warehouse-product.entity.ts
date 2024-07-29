
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
export type BoonkerIntWarehouseProductDocument = BoonkerIntWarehouseProduct & Document;
@Schema({
  timestamps: true,
})
export class BoonkerIntWarehouseProduct extends Document {


  @Prop({ type: String, required: false })
  codigo_barra: string;

  @Prop({ type: String, required: false })
  porcentaje_iva: string;

  @Prop({ type: String, required: false })
  tipo: string;

  @Prop({ required: false })
  cantidad_stock: string;

  @Prop({ type: String, required: false })
  categoria_id: string;

  @Prop({ type: String, required: false })
  minimo: string;

  @Prop({ type: String, required: false })
  pvp1: string;

  @Prop({ required: false })
  pvp_manual: boolean;

  @Prop({ type: String, required: false })
  descripcion: string;
  @Prop({ type: String, required: false })
  nombre: string;
  @Prop({ type: String, required: false })
  codigo: string;
  @Prop({  required: false })
  estado: string;
  @Prop({  required: false })
  para_supereasy: boolean;
  @Prop({  required: false })
  para_comisariato: boolean;

  @Prop({ type: String, required: false })
  codigo_sap: string;

  @Prop({ type: String, required: false })
  pvp_comisariato: string;


  @Prop({ type: String, required: false })
  categoria_comisariato_id: string;

  @Prop({ type: Boolean, required: false })
  active: boolean;

  @Prop({ nullable: true })
  createdAt: string;

  @Prop({ nullable: true })
  updatedAt: string;




}

export const BoonkerIntWarehouseProductSchema = SchemaFactory.createForClass(BoonkerIntWarehouseProduct);
