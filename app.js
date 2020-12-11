const multiplicar = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');


let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;

console.log(`Base : ${base} Limite :  ${limite}`);

switch (comando) {
    case 'listar':
        multiplicar.listarTabla(base, limite)
        break;
    case 'crear':
        multiplicar.crearArchivo(base).then(nombreArchivo =>
            console.log(`el archivo ${nombreArchivo} se ha creado correctamente`)
        ).catch(err => console.log(`ha ocurrido un error`, err));
        break;
    default:
        console.log('comando no reconocido');
}