import express from 'express'


//importar el controlador de habitaciones
import { ControllerHabitacion } from '../controllers/ControllerHabitacion.js'
let contoladorHabitacion=new ControllerHabitacion();
//variable para personalizar las rutas (ENDPOINTS) de mis servicios

export let rutas= express.Router()

//escribo mis rutas(cada ruta es un servicio)


//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS HABITACIONES
rutas.get('/viajescomfama/v1/habitaciones',contoladorHabitacion.buscarHabitaciones)
/
rutas.get('/viajescomfama/v1/habitacion/:id',contoladorHabitacion.buscarHabitacionPorId)
/
rutas.post('/viajescomfama/v1/habitacion/',contoladorHabitacion.agregarHabitacion)
/
rutas.put('/viajescomfama/v1/habitacion/:id',contoladorHabitacion.editarHabitacion)

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS RESERVAS

rutas.get('viajescomfama/v1/reservas/',function (req,res){
    res.send('Hello World')
})

rutas.get('viajescomfama/v1/reservas/:id',function (req,res){
    res.send('Hello World')
})

rutas.post('viajescomfama/v1/reserva',function (req, res) {
    res.send('Hello World')
})
rutas.put('viajescomfama/v1/reserva/id',function (req, res) {
    res.send('Hello World')
})
rutas.delete('viajescomfama/v1/cancelar/id',function (req, res) {
    res.send('Hello World')
})

