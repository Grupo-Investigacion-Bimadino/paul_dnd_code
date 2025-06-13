import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Personaje extends Document{
    @Prop({ required: true })
    nombre: string;
  
    @Prop({ required: true })
    clase: string; // Ej: "Guerrero", "Mago", "Explorador"
  
    @Prop({ default: 1 })
    nivel: number;
  
    @Prop({ default: 0 })
    experiencia: number;
  
    @Prop({ default: 100 })
    puntosDeVida: number;
  
    @Prop({ default: 50 })
    puntosDeEnergia: number;   
}

export const PersonajeSchema = SchemaFactory.createForClass(Personaje);