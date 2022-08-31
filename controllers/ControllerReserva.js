import {ServicioReserva} from '../services/ServicioReserva.js'

export class ControllerReserva{

    constructor(){}

    

//buscar reserva
async buscarReserva(request, response){

    let servicioReserva = new ServicioReserva()
        //intento resolver la peticion
        try{
            response.status(200).json({
                mensaje:"exito en la consulta",
                datos:servicioReserva.buscarTodasReservas()})  
        }catch(error){ //fallo resolviendo la peticion
            
            response(400).json({
                mensaje:"fallo en la consulta"+error,
                datos:null   
            })
        }
}

async buscarReservaPorId(request,response){
    let identificador=request.params.id
    
    let servicioReserva = new ServicioReserva()
    try{
        response.status(200).json({
            mensaje:"exito en la consulta "+identificador,
            datos:servicioReserva.buscarReservaPorId(identificador)})
    }catch(error){ //fallo resolviendo la peticion
        
        response(400).json({
            mensaje:"fallo en la consulta"+error,
            datos:null
        })
    }
}

async agregarReserva(request,response){
    let cuerpo = request.body
            //llamo al servicio habitaciones
    let servicioReserva=new ServicioReserva()
           
    try{
    
        servicioReserva.agregarReserva(cuerpo)
                
        response.status(200).json({
            mensaje:"exito agregando reserva",
            datos:null})
    }catch(error){ //fallo resolviendo la peticion
        
        response(400).json({
            mensaje:"fallo agregando habitacion"+error,
           datos:null})
    }
}

async editarReserva(request, response){
    let id = request.params.id
    let datos = request.body
    let servicioReserva=new ServicioReserva()
           
    try{
        servicioHabitacion.actualizar(id,datos)
        response.status(200).json({
            mensaje: "exito editando la Reserva  " + id,
            datos: null})
        
}catch(error){ //fallo resolviendo la peticion
    
    response(400).json({mensaje:"fallo en resolviendo la peticion"+error,
            datos:null})
}}


}