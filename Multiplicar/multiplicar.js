/* Requires */
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=========================================='.green);
    console.log(`============== Tabla del ${ base } ==============`.white);
    console.log('=========================================='.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base * i}`);
    }
};

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }
        fs.writeFile(`Multiplicar/Tablas/Tabla del ${ base } al ${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla del ${ base } al ${ limite }.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}