const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    let data = '';
    for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }
    console.log(data.green);
}


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject(`${base} no es un numero`);
        }

        let data = '';
        let nombreArchivo = `tablas/tabla-${base}.txt`

        for (let i = 0; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(nombreArchivo, data, err => {
            if (err) {
                reject(err);
            } else {
                resolve(nombreArchivo);
            }
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}