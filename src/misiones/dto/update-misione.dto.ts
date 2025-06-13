import { PartialType } from '@nestjs/mapped-types';
import { CreateMisioneDto } from './create-misione.dto';

export class UpdateMisioneDto extends PartialType(CreateMisioneDto) {}
