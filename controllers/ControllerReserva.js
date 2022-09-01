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
                datos:await servicioReserva.buscarTodasReservas()
            })  
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
            datos:await servicioReserva.buscarReservaPorId(identificador)})
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
    
        await servicioReserva.agregarReserva(cuerpo)
                
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
        await servicioReserva.actualizarReserva(id,datos)
        response.status(200).json({
            mensaje: "exito editando la Reserva  " + id,
            datos: null})
        
}catch(error){ //fallo resolviendo la peticion
    
    response(400).json({mensaje:"fallo en resolviendo la peticion"+error,
            datos:null})
}}

async eliminar(request,response){
    let id = request.params.id
   
    let servicioReserva=new ServicioReserva()
           
    try{
        await servicioReserva.eliminarReserva(id)
        response.status(200).json({
            mensaje: "exito editando la Reserva  " + id,
            datos: null})
        
}catch(error){ //fallo resolviendo la peticion
    
    response(400).json({mensaje:"fallo en resolviendo la peticion"+error,
            datos:null})
}
}
}