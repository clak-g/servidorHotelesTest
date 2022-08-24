

import{servidor} from './servidor/servidor.js'



import 'dotenv/config'
//para utilizar una clase la debo instanciar 
//para usar una clase debo crear un objeto
//para usar una clase le debo sacar copia

//PARA UTILIZAR UNA CLASE LA DEBO DISTANCIAR
//PARA USAR CLASE DEBO CREAR UN OBJETO (ES UNA VARIABLE)
//PARA USAR UNA CLASE LE DEBO SACAR COPIA
let servidorComfama= new servidor()

//ENCIENDO EL SERVIDOR
servidorComfama.encenderServidor()

console.log(process.env.PORT) // remove this after you've confirmed it workin