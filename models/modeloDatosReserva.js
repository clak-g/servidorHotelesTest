//importar a mongoose   
import mongoose from "mongoose";
const Schema = mongoose.Schema;
//esquemade datos mongoose
//el esquema es una regla de que datos voy a manipular
const Reserva = new Schema({
   idhabitacion:{
    type:String,
    required:true
   },
   
   fechaEntrada:{
        type:Date,
        required:true

    },
    fechaSalida:{
        type:Date,
        required:true
    },
    numeroNinos:{
        type:Number,
        required:false
    },
    numeroAdultos:{
        type:Number,
        required:true
    },
    valorReserva:{
        type:Number,
        required:true
    }


    
})

const modeloReserva=mongoose.model('reserva',Reserva)