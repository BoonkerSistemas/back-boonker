import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsNotEmpty, IsNumber, IsObject, IsString} from "class-validator";

export class CreateRoleDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly role: string;

    @ApiProperty()
    @IsObject({})
    readonly permission: object;

    @ApiProperty()
    @IsBoolean({})
    readonly active: boolean;

}
