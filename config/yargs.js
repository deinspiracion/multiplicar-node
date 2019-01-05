const opt = {
    base:{
        demand: true,
        alias : 'b'
    },
    limite : {
        demand : true,
        alias :'l',
        default : 10
    }
}

const argv = require('yargs').command('listar','Imprime en cosola la tabla de multiplicar',opt)
.command('crear','crea un archivo con multiplicaciones',opt)
.help()
.argv;

module.exports ={ argv }