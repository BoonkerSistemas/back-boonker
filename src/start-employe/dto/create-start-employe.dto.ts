import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateStartEmployeDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly startDay: string;

  @ApiProperty()
  @IsString({})
  readonly hourStart: string;

  @ApiProperty()
  @IsString({})
  readonly finishDay: string;

  @ApiProperty()
  @IsString({})
  readonly hourFinish: string;


  @ApiProperty()
  @IsString({})
  readonly employee: string;
  @ApiProperty()
  @IsString({})
  readonly employeeId: string;
  @ApiProperty()
  @IsString({})
  readonly hour: string;
}
