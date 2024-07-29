
import {
  IsBoolean, IsDate,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly CODIGO: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly DESCRIPCION: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly PRECIO2024: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly PRECIO2022: string;



  @ApiProperty()
  @IsString()
  readonly PRECIO2023: string;
  @ApiProperty()
  @IsString()
  readonly UNIDAD: string;


}

