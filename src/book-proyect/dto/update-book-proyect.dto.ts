import { PartialType } from '@nestjs/mapped-types';
import { CreateBookProyectDto } from './create-book-proyect.dto';

export class UpdateBookProyectDto extends PartialType(CreateBookProyectDto) {}
