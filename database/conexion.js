//IMPORTAR MONGOOSE
import mongoose from "mongoose"

//me conecto a la base de datos
export async function conectar(){    
    try{
        await mongoose.connect(process.env.DATABASE);
    }
    catch{
        console.log("uppppsss"+error)
    }
}
