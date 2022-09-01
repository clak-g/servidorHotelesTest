import { modeloReserva } from '../models/modeloDatosReserva.js';

export class ServicioReserva{

    constructor(){}

    async buscarTodasReservas(){
        let reservas=await modeloReserva.find()
        return reservas
    }

    async buscarReservaPorId(id){
        let reserva = await modeloReserva.findById(id)
        return reserva
    }

    async agregarReserva(datos){
        let reservaAGuardar=new modeloReserva(datos)
        return await reservaAGuardar.save()
    }

    async actualizarReserva(id,datos){
        return modeloReserva.findByIdAndUpdate(id,datos)

    }

    async eliminarReserva(id){
        const id = req.params.id;
        return modeloReserva.findByIdAndDelete(id)
    
    }
}

