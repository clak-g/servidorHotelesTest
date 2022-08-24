//importar a mongoose   
import mongoose from "mongoose";
const Schema = mongoose.Schema;
//esquemade datos mongoose
//el esquema es una regla de que datos voy a manipular
const Habitacion = new Schema({
    nombre:{
        type:String,
        required:true

    },
    valorNoche:{
        type:Number,
        required:true
    },
    descripcion:{type:String,
        required:true},
    imagenes:{
        type:String,
        required:false},
    numerodepersonas:{
        type:String,
        required:true
    }
})

export const modeloHabitacion=mongoose.model('habitacion')

