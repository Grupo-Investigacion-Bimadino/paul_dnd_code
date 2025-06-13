import { PartialType } from '@nestjs/mapped-types';
import { CreateMazmorraDto } from './create-mazmorra.dto';

export class UpdateMazmorraDto extends PartialType(CreateMazmorraDto) {}
