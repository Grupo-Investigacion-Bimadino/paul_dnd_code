import { Injectable } from '@nestjs/common';
import { CreateMazmorraDto } from './dto/create-mazmorra.dto';
import { UpdateMazmorraDto } from './dto/update-mazmorra.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Mazmorra } from './schemas/mazmorras.schema';
import { Model } from 'mongoose';

@Injectable()
export class MazmorrasService {
  constructor(@InjectModel(Mazmorra.name) private mazmorraModel: Model<Mazmorra>) {}

  async create(createMazmorraDto: CreateMazmorraDto): Promise<Mazmorra> {
    const createdMazmorra = new this.mazmorraModel(createMazmorraDto);
    return createdMazmorra.save();
  }

  async findAll(): Promise<Mazmorra[]> {
    return this.mazmorraModel.find().exec();
  }

  async findOne(id: string): Promise<Mazmorra | null>  {
    return this.mazmorraModel.findById(id).exec();
  }

  async update(id: string, updateMazmorraDto: UpdateMazmorraDto): Promise<Mazmorra | null> {
    return this.mazmorraModel.findByIdAndUpdate(id, updateMazmorraDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Mazmorra | null> {
    return this.mazmorraModel.findByIdAndDelete(id).exec();
  }
}
