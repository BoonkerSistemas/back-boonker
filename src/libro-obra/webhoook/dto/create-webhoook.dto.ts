import {

  IsNotEmpty,
  IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateWebhoookDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly value: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly project: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly s31: string;


}

