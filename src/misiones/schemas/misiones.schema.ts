import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Mision extends Document{
    @Prop({ required: true })
    nombre: string;
  
    @Prop()
    descripcion: string;
  
    @Prop({ required: true })
    nivelRequerido: number;
  
    @Prop()
    duracionEstimada: string; // Puedes usar string (ej. "30 minutos") o un number (minutos)
  
    @Prop()
    misionesRelacionadas: string;  
}

export const MisionSchema = SchemaFactory.createForClass(Mision);