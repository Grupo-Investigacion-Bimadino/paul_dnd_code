import { Injectable } from '@nestjs/common';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Personaje } from './schemas/personajes.schema';
@Injectable()
export class PersonajesService {
  constructor(
    @InjectModel(Personaje.name) private personajeModel: Model<Personaje>,
  ) {}
  async create(createPersonajeDto: CreatePersonajeDto): Promise<Personaje> {
    const createdPersonaje = new this.personajeModel(createPersonajeDto);
    return createdPersonaje.save();
  }
  async findAll(): Promise<Personaje[]> {
    return this.personajeModel.find().exec();
  }
  async findOne(id: string): Promise<Personaje | null> {
    return this.personajeModel.findById(id).exec();
  }
  async update(id: string, updatePersonajeDto: UpdatePersonajeDto): Promise<Personaje | null> {
    return this.personajeModel.findByIdAndUpdate(id, updatePersonajeDto, { new: true }).exec();
  }
  async remove(id: string): Promise<Personaje | null> {
    return this.personajeModel.findByIdAndDelete(id).exec();
  }
}
