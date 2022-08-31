//LLAMAMOS A EXPRESS
//const express = require('express')
import express from 'express'
//llamamos a las rutas
import {rutas} from '../routers/rutas.js'


//LLAMAR EL METODO CONECTAR CON LA DB
import { conectar } from "../database/conexion.js"


export class servidor{

    constructor(){
        this.app = express() //atributo, una variable
        this.habilitarBody()
        this.conectarconBd()
        this.atenderPeticiones()
    }

    atenderPeticiones(){    //enrutar peticiones
        
        this.app.use('/',rutas)
    }

    habilitarBody(){
        this.app.use(express.json())
    }

    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("servidor encendido"+process.env.PORT)
        })

    
    }
    conectarconBd(){
        conectar()
    }
}