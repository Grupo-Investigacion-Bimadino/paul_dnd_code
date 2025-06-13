import { Injectable } from '@nestjs/common';
import { CreateMisioneDto } from './dto/create-misione.dto';
import { UpdateMisioneDto } from './dto/update-misione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Mision } from './schemas/misiones.schema';
import { Model } from 'mongoose';
@Injectable()
export class MisionesService {
  constructor(
 @InjectModel(Mision.name) private readonly misionModel: Model<Mision>,
  ) {}
  async create(createMisioneDto: CreateMisioneDto): Promise<Mision> {
    const createdMision = await this.misionModel.create(createMisioneDto);
 return createdMision;
  }
  async findAll(): Promise<Mision[]> {
    return this.misionModel.find().exec();
  }
  async findOne(id: string): Promise<Mision | null> {
    return this.misionModel.findById(id).exec();
  }
  async update(id: string, updateMisioneDto: UpdateMisioneDto): Promise<Mision | null> {
    return this.misionModel.findByIdAndUpdate(id, updateMisioneDto, { new: true }).exec();
  }
  async remove(id: string): Promise<Mision | null> {
    return this.misionModel.findByIdAndDelete(id).exec();
  }
}