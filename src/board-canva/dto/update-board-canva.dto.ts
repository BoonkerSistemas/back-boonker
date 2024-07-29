import { PartialType } from '@nestjs/swagger';
import { CreateBoardCanvaDto } from './create-board-canva.dto';

export class UpdateBoardCanvaDto extends PartialType(CreateBoardCanvaDto) {}
