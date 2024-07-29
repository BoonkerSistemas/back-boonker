import { IsNotEmpty, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class RecoveryDto {
    @ApiProperty()
    @IsString({})
    id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString({})
    readonly email: string;


}
