
const fs = require('fs')
const colors = require('colors')

let listar = (base ,limite=10 )=>{
    return new Promise( (result , reject)=>{
        let data = ''
        console.log('==============='.green)
        console.log(` tabla ${base}  `.green)
        console.log('==============='.green)
        for (let index = 1; index <= limite; index++) {
           
            data += ` ${base} * ${index} = ${base * index}\n`;
        }

        if(!Number(base) || !Number(limite)){
            reject('error los datos no son numeros')
        }
        result(data)
        


    } )
}
crearArchivo = ( base , limite = 10)=>{
    return new Promise( (resolve, reject)=>{

        if(!Number(base) || !Number(limite)){
            reject('no es un numero')
            return;
        }
        let data = ''
        for (let index = 1; index <= limite; index++) {
            
            data += ` ${base} * ${index} = ${base * index}\n`;
            
            
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`,data,(err)=>{

            if(err) 
                reject(err)
            else
                resolve(`tablas/tabla-${base}.txt`)
            
        })


    } )

}

module.exports = {
    crearArchivo,
    listar
}