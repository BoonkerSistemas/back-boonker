import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBoonkerIntWarehouseProductDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly codigo_barra: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly porcentaje_iva: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly cantidad_stock: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly tipo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly categoria_id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly minimo: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly pvp1: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly pvp_manual: boolean;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly descripcion: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly estado: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly codigo: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly para_supereasy: boolean;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly para_comisariato: boolean;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly codigo_sap: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly pvp_comisariato: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly categoria_comisariato_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;
}
