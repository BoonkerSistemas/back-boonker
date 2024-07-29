import {IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class SignUpDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsNumber({})
    readonly role_id: number;

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
    readonly challenges: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail({}, {message: 'Ingrese un email correcto'})
    readonly email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean({})
    readonly emailverified: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsString({})
    readonly verificationtoken: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean({})
    readonly status: boolean;

    @IsNotEmpty()
    @IsDate({})
    readonly created: number;

    @IsNotEmpty()
    @IsString({})
    password1: string;

    @IsNotEmpty()
    @IsDate({})
    readonly lastupdated: number;
}
