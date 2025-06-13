import { Module } from '@nestjs/common';
import { ReglasService } from './reglas.service';
import { ReglasController } from './reglas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReglaSchema, Regla } from './schemas/reglas.schema';


@Module({
  imports :[
    MongooseModule.forFeature([{ name: Regla.name, schema: ReglaSchema}])
  ],
  controllers: [ReglasController],
  providers: [ReglasService],
})
export class ReglasModule {}
