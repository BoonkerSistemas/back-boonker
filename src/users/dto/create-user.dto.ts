import {
    IsBoolean,
    IsDate,
    IsEmail,
    IsNotEmpty, IsNumber,
    IsString, MinLength,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import { Role } from 'src/role/schema/role.schema';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString({})
    readonly rol: Role;

    @ApiProperty()
    @IsNotEmpty()
    @IsString({})
    readonly realm: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString({})
    readonly username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsString({})
    readonly credentials: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString({})
    picture: string;



    @ApiProperty()
    @IsNotEmpty()
    @IsEmail({}, {message: 'Ingrese un email correcto'})
    readonly email: string;





    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean({})
    readonly status: boolean;



    @IsNotEmpty()
    @IsString({})
    password1: string;


}
