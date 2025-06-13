import { Module } from '@nestjs/common';
import { MisionesService } from './misiones.service';
import { MisionesController } from './misiones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MisionSchema } from './schemas/misiones.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'User', schema: MisionSchema}])
  ],
  controllers: [MisionesController],
  providers: [MisionesService],
})
export class MisionesModule {}
