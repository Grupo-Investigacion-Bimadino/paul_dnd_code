import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';

@Controller('personajes')
export class PersonajesController {
  constructor(private readonly personajesService: PersonajesService) {}

  @Post()
  create(@Body() createPersonajeDto: CreatePersonajeDto) {
    return this.personajesService.create(createPersonajeDto);
  }

  @Get()
  findAll() {
    return this.personajesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personajesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonajeDto: UpdatePersonajeDto) {
    return this.personajesService.update(id, updatePersonajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personajesService.remove(id);
  }
}
