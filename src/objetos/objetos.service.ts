import { Injectable } from '@nestjs/common';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { UpdateObjetoDto } from './dto/update-objeto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Objeto } from './schemas/objetos.schema';
import { Model } from 'mongoose';
@Injectable()
export class ObjetosService {
  constructor(@InjectModel(Objeto.name) private readonly objetoModel: Model<Objeto>) {}
  async create(createObjetoDto: CreateObjetoDto): Promise<Objeto> {
    const createdObjeto = await this.objetoModel.create(createObjetoDto);
    return createdObjeto;
  }
  async findAll(): Promise<Objeto[]> {
    return this.objetoModel.find().exec();
  }
  async findOne(id: string): Promise<Objeto | null> {
    return this.objetoModel.findById(id).exec();
  }
  async update(id: string, updateObjetoDto: UpdateObjetoDto): Promise<Objeto | null> {
    return this.objetoModel.findByIdAndUpdate(id, updateObjetoDto, { new: true }).exec();
  }
  async remove(id: string): Promise<Objeto | null> {
    return this.objetoModel.findByIdAndDelete(id).exec();
  }
}