import { Module } from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { PersonajesController } from './personajes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonajeSchema } from './schemas/personajes.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'User', schema: PersonajeSchema}])
  ],
  controllers: [PersonajesController],
  providers: [PersonajesService],
})
export class PersonajesModule {}
