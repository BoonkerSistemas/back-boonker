import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { Role } from 'src/role/schema/role.schema';
export type UserDocument = User & Document;
@Schema({
    timestamps: true,
})
export class User extends Document {

    @Prop({ type: String, required: false })
    name: string;

    @Prop({ type: String, required: false })
    realm: string;

    @Prop({ type: String, required: true })
    username: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: String, required: false })
    credentials: string;

    @Prop({ type: String, required: false })
    challenges: string;

    @Prop({ type: String, required: false })
    email: string;

    @Prop({ required: true })
    rol: Role[];


    @Prop({ type: Boolean, required: false })
    userVerified: boolean;

    @Prop({ type: Boolean, required: false })
    statusGeneral: boolean;

    @Prop({ type: String, required: false })
    verificationToken: string;

    @Prop({ type: Boolean, required: false })
    status: boolean;

    @Prop({ nullable: true })
    createdAt: string;

    @Prop({ nullable: true })
    updatedAt: string;

    @Prop({ required: false })
    role: string;

    @Prop({ required: false })
    picture: string;

    @Prop({ required: false, nullable: true })
    modifiedUserId: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
