import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
export type RoleDocument = Role & Document;
@Schema({
    timestamps: true,
    collection: "role"
})



export class Role {

    @Prop({ type: String, required: true })
    role: string

    @Prop({  required: true })
    permission: string[]


    @Prop({ type: Boolean, required: true })
    active: boolean


    @Prop({nullable: true})
    createdAt: string;

    @Prop({nullable: true})
    updatedAt: string;

    @Prop({required: false, nullable: true})
    modifiedUserId: string;

    @Prop({required: false, nullable: true})
    deleteAt: string;


}
export const RoleSchema = SchemaFactory.createForClass(Role);

