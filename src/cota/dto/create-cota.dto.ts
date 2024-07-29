import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateCotaDto {


  @ApiProperty()
  @IsString({})
  readonly value: string;

}
