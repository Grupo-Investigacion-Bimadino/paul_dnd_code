import { Injectable } from '@nestjs/common';
import { CreateReglaDto } from './dto/create-regla.dto';
import { UpdateReglaDto } from './dto/update-regla.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Regla } from './schemas/reglas.schema';
import { Model } from 'mongoose';
@Injectable()
export class ReglasService {
  constructor(@InjectModel(Regla.name) private reglaModel: Model<Regla>) {}
  async create(createReglaDto: CreateReglaDto): Promise<Regla> {
    const createdRegla = new this.reglaModel(createReglaDto);
    return createdRegla.save();
  }
  async findAll(): Promise<Regla[]> {
    return this.reglaModel.find().exec();
  }
  async findOne(id: string): Promise<Regla | null> {
    return this.reglaModel.findById(id).exec();
  }
  async update(id: string, updateReglaDto: UpdateReglaDto): Promise<Regla | null> {
    return this.reglaModel.findByIdAndUpdate(id, updateReglaDto, { new: true }).exec();
  }
  async remove(id: string): Promise<Regla | null> {
    return this.reglaModel.findByIdAndDelete(id).exec();
  }
}
