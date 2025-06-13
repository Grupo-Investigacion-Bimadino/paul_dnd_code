import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PersonajesModule } from './personajes/personajes.module';
import { ObjetosModule } from './objetos/objetos.module';
import { MazmorrasModule } from './mazmorras/mazmorras.module';
import { MisionesModule } from './misiones/misiones.module';
import { ReglasModule } from './reglas/reglas.module';

@Module({
  imports: [
    UsuariosModule,
    PersonajesModule,
    ObjetosModule,
    MazmorrasModule,
    MisionesModule,
    ReglasModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        uri: process.env.DB_URI,
      }),
      inject: [],
    }),   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
