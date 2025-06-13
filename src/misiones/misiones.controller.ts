import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MisionesService } from './misiones.service';
import { CreateMisioneDto } from './dto/create-misione.dto';
import { UpdateMisioneDto } from './dto/update-misione.dto';

@Controller('misiones')
export class MisionesController {
  constructor(private readonly misionesService: MisionesService) {}

  @Post()
  create(@Body() createMisioneDto: CreateMisioneDto) {
    return this.misionesService.create(createMisioneDto);
  }

  @Get()
  findAll() {
    return this.misionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.misionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMisioneDto: UpdateMisioneDto) {
    return this.misionesService.update(id, updateMisioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.misionesService.remove(id);
  }
}
