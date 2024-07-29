import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateSpareProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly purchaseOrder: string;

  @ApiProperty()
  @IsObject({})
  readonly order: object;

  @ApiProperty()
  @IsBoolean({})
  readonly dateGenerate: boolean;

  @ApiProperty()
  @IsBoolean({})
  readonly iva: boolean;

  @ApiProperty()
  @IsBoolean({})
  readonly subtotal: boolean;

  @ApiProperty()
  @IsBoolean({})
  readonly total: boolean;


  @ApiProperty()
  @IsBoolean({})
  readonly dateApproval: boolean;


  @ApiProperty()
  @IsBoolean({})
  readonly datePay: boolean;


  @ApiProperty()
  @IsBoolean({})
  readonly status: boolean;


  @ApiProperty()
  @IsBoolean({})
  readonly active: boolean;


  @ApiProperty()
  @IsBoolean({})
  readonly commets: boolean;

}
