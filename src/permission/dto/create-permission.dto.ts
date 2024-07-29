import {
    IsBoolean, IsDate,
    IsNotEmpty,
    IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreatePermissionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly route: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly code: string;

    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    readonly createdAt: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    readonly updatedAt: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    readonly deletedAt: string;

}

