import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MazmorrasService } from './mazmorras.service';
import { CreateMazmorraDto } from './dto/create-mazmorra.dto';
import { UpdateMazmorraDto } from './dto/update-mazmorra.dto';

@Controller('mazmorras')
export class MazmorrasController {
  constructor(private readonly mazmorrasService: MazmorrasService) {}

  @Post()
  create(@Body() createMazmorraDto: CreateMazmorraDto) {
    return this.mazmorrasService.create(createMazmorraDto);
  }

  @Get()
  findAll() {
    return this.mazmorrasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mazmorrasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMazmorraDto: UpdateMazmorraDto) {
    return this.mazmorrasService.update(id, updateMazmorraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mazmorrasService.remove(id);
  }
}
