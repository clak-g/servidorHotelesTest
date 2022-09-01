import express from 'express'


//importar el controlador de habitaciones
import { ControllerHabitacion } from '../controllers/ControllerHabitacion.js'
let controladorHabitacion=new ControllerHabitacion();
//importar el controlador de reservas
import { ControllerReserva } from '../controllers/ControllerReserva.js';
let controladorReserva=new ControllerReserva();

//variable para personalizar las rutas (ENDPOINTS) de mis servicios

export let rutas= express.Router()

//escribo mis rutas(cada ruta es un servicio)


//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS HABITACIONES
rutas.get('/viajescomfama/v1/habitaciones',controladorHabitacion.buscarHabitaciones)
/
rutas.get('/viajescomfama/v1/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)
/
rutas.post('/viajescomfama/v1/habitacion/',controladorHabitacion.agregarHabitacion)
/
rutas.put('/viajescomfama/v1/habitacion/:id',controladorHabitacion.editarHabitacion)

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS RESERVAS

rutas.get('/viajescomfama/v1/reservas/',controladorReserva.buscarReserva)

rutas.get('/viajescomfama/v1/reservas/:id',controladorReserva.buscarReservaPorId)

rutas.post('/viajescomfama/v1/reserva',controladorReserva.agregarReserva)

rutas.put('/viajescomfama/v1/reserva/:id',controladorReserva.editarReserva)

rutas.delete('/viajescomfama/v1/reserva/id',controladorReserva.eliminar)

//rutas.delete('viajescomfama/v1/cancelar/id',function (req, res) {
//  res.send('Hello World')
//})

