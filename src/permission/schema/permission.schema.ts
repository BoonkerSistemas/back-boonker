import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
export type PermissionDocument = Permission & Document;
@Schema({
    timestamps: true,
    collection: "permission"
})

export class Permission {


    @Prop({ type: String, required: true })
    title: string

    @Prop({ type: String, required: true })
    code: string

    @Prop({ type: String, required: true })
    route: string

    @Prop({ type: String, required: true })
    description: string

    @Prop({nullable: true})
    createdAt: string;

    @Prop({nullable: true})
    updatedAt: string;

    @Prop({ required: false, nullable: true, default: null })
    deletedAt: Date


}
export const PermissionSchema = SchemaFactory.createForClass(Permission);

