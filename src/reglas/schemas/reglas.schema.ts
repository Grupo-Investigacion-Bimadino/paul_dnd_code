import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Regla extends Document{
    @Prop({ required: true })
    nombre: string;
  
    @Prop()
    descripcion: string;
  
    @Prop({ required: true })
    efecto: string; // Ej: "Duplica la recompensa", "Prohíbe objetos mágicos", etc.
  
    @Prop()
    misionesAfectadas: string;
  
    @Prop()
    mazmorrasAfectadas: string; 
}

export const ReglaSchema = SchemaFactory.createForClass(Regla);