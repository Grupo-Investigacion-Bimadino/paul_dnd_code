import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Usuario extends Document{
    @Prop({ required: true, unique: true })
    id_usuario: string; // Clave primaria personalizada
  
    @Prop({ required: true })
    primerNombre: string;
  
    @Prop({ required: true })
    apellido: string;
  
    @Prop()
    segundoApellido: string;
  
    @Prop({ required: true, unique: true })
    correo: string;
  
    @Prop({ required: true })
    contraseña: string;
  
    @Prop({ required: true })
    tipo: string; // Ej: "admin", "jugador", "moderador", etc.
  
    @Prop()
    telefono: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);