let { crearArchivo } = require("./multiplicar/multiplicar");
let { listarTabla } = require("./multiplicar/multiplicar");
let { argv } = require("./config/yargs");
let colors = require("colors");

let comando = argv._[0];

switch (comando) {
    case "listar":
        console.log("listar");
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        console.log("Comando crear".green);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log("Comando inexistente!");


}
// console.log(process.argv);

// let argv2 = process.argv;

// console.log("Limite", argv.limite);

// let parametro = argv[2];
// let base = parametro.split("=")[1];

// console.log(`Base "${base}" reconocida`);