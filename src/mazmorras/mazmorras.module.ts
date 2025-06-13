import { Module } from '@nestjs/common';
import { MazmorrasService } from './mazmorras.service';
import { MazmorrasController } from './mazmorras.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MazmorraSchema } from './schemas/mazmorras.schema';

@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'User', schema: MazmorraSchema}])
  ],
  controllers: [MazmorrasController],
  providers: [MazmorrasService],
})
export class MazmorrasModule {}
