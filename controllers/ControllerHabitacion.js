import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
export class ControllerHabitacion{


        constructor(){}

        //buscar habitaciones
        async buscarHabitaciones(request, response){

            //llamo al servicio
            let servicioHabitacion = new ServicioHabitacion()
            //intento resolver la peticion
            try{
                response.status(200).json({
                    mensaje:"exito en la consulta",
                    datos:await servicioHabitacion.buscarTodas()            
                })
            }catch(error){ //fallo resolviendo la peticion
                
                response(400).json({
                    mensaje:"fallo en la consulta"+error,
                    datos:null   
                })
            }
        }
        //buscar habicacion por id
        async buscarHabitacionPorId(request, response){
            let identificador=request.params.id

            //llamo al servicio habitaciones
            let servicioHabitacion=new ServicioHabitacion()
            
            try{
                response.status(200).json({
                    mensaje:"exito en la consulta "+identificador,
                    datos:await servicioHabitacion.buscarPorId(identificador)
                })
            }catch(error){ //fallo resolviendo la peticion
                
                response(400).json({
                    mensaje:"fallo en la consulta"+error,
                    datos:null
                })
            }
        }
        //agregar habitacion
        async agregarHabitacion(request, response){
            let cuerpo = request.body
            //llamo al servicio habitaciones
            let servicioHabitacion=new ServicioHabitacion()
           
            try{
                await servicioHabitacion.agregar(cuerpo)
                
                response.status(200).json({
                    mensaje:"exito agregando habitacion",
                    datos:null
                })
            }catch(error){ //fallo resolviendo la peticion
                
                response(400).json({
                 mensaje:"fallo agregando habitacion"+error,
                datos:null})
            }
        }
    
        //editar habitacion
        async editarHabitacion(request, response){
            

            //recibir id como parametro
            let id = request.params.id

            //recibir los datos con los que voy a editar
            let datos = request.body

            //llamo al servicio habitaciones
            let servicioHabitacion=new ServicioHabitacion()
           
            try{
                await servicioHabitacion.actualizar(id,datos)
            response.status(200).json({
                mensaje: "exito editando la habitacion" + id,
                datos: null
                
            })
        }catch(error){ //fallo resolviendo la peticion
            
            response(400).json({mensaje:"fallo en resolviendo la peticion"+error,
            datos:null})
        }}

        //eliminar habitacion
       /* eliminarHabitacion(request, response){
            try{
            response.status(200).json({
                mensaje:"exito en la consulta",
                    datos:["Habitacion1","200USD","tv por cable"]
            })
        }catch(error){ //fallo resolviendo la peticion
            
            response(400).json({mensaje:"fallo en resolviendo la peticion"+error,
            datos:null})
        }}]*/
}