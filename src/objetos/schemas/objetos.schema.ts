import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Objeto extends Document{
    @Prop({ required: true })
    nombre: string;
  
    @Prop({ required: true })
    tipo: string; // Por ejemplo: "poción", "arma", "herramienta", etc.
  
    @Prop()
    descripcion: string;
  
    @Prop({ required: true })
    valor: number; // Puede representar su costo, poder o puntuación
  
    @Prop()
    efecto: string; // Ejemplo: "Recupera 20 HP", "Duplica puntos", etc.
}

export const ObjetoSchema = SchemaFactory.createForClass(Objeto);