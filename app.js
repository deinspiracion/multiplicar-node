const  {argv}  = require('./config/yargs')
const colors = require('colors/safe')
const { crearArchivo,listar }  = require('./multiplicar/multiplicar')

// let base = 'abc'


let argv2 = process.argv;

// console.log(argv.base);
let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log('listar'.red);
        listar(argv.base,argv.limite).then((data)=>{
            console.log(data);
            
        }).catch(err=>{
            console.log(err);
            
        })
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base,argv.limite).then((result)=>{
            console.log("resultado",colors.green(result));
            
        }).catch(err=>{
            console.log(err);
            
        })
        break;

    default:
        console.log('comando no reconocido');
    
        break;
}


