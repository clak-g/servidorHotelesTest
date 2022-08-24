class ControllerReserva{

    constructor(){}

//buscar reserva
buscarReserva(request, response){
        //intento resolver la peticion
        try{
            response.status(200).json({
                
            })
        }catch(error){ //fallo resolviendo la peticion
            
            response(400).json({})
        }
}

buscarReservaPorId(request,response){
    try{
        response.status(200).json({
            
        })
    }catch(error){ //fallo resolviendo la peticion
        
        response(400).json({})
    }
}

agregarReserva(request,response){
    try{
        response.status(200).json({
            
        })
    }catch(error){ //fallo resolviendo la peticion
        
        response(400).json({})
    }
}

editarReserva(request, response){try{
    response.status(200).json({
        
    })
}catch(error){ //fallo resolviendo la peticion
    
    response(400).json({})
}}


}