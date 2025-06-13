import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Mazmorra extends Document{
    @Prop({ required: true, unique: true })
    mazmorra: string; // Clave primaria (puedes usar _id de Mongo o este campo personalizado)
  
    @Prop({ required: true })
    nombre: string;
  
    @Prop()
    descripcion: string;
  
    @Prop({ required: true })
    dificultad: string; // Podría ser un enum si tienes niveles definidos (fácil, medio, difícil)
  
    @Prop()
    recompensa: string; // Puede ser string, número, u objeto según el diseño
  
    @Prop({ default: 'pendiente' })
    estado: string; // Por ejemplo: 'pendiente', 'completado', 'en progreso'
}


export const MazmorraSchema = SchemaFactory.createForClass(Mazmorra);