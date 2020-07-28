const fs = require('fs');
const colors = require("colors");


module.exports.listarTabla = (base, limite = 10) => {

    console.log("===============================".rainbow);
    console.log(`Tabla de ${base}. Limite ${limite}"`.green);
    console.log("===============================".rainbow);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }


}

module.exports.crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {



        if (!Number(base)) {
            reject(`El valor "${base}" no es un numero valido`.red);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green);
        });




    });
}