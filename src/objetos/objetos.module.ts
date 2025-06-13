import { Module } from '@nestjs/common';
import { ObjetosService } from './objetos.service';
import { ObjetosController } from './objetos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ObjetoSchema } from './schemas/objetos.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'User', schema: ObjetoSchema}])
  ],
  controllers: [ObjetosController],
  providers: [ObjetosService],
})
export class ObjetosModule {}
