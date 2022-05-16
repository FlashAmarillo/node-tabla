
const { crearArchivo } = require("./helpers/multiplicar"); //forma de importar otro archivo
const argv = require("./config/yargs");
// OJO: PULSAR Ctrl + barra espaciadora para mostrar todas las opciones en vscode
require('colors');

//Limpiar la consola
console.clear();

// forma muy antigua de interactuar con la consola
// console.log(process.argv);
// const [ , , arg3 = "base=5" ] = process.argv;
// const [, base = 5 ] = arg3.split('=');
// console.log( base );

//console.log(process.argv); // forma vieja
//console.log(argv); //forma nueva usando yargs

// Yargs nos permite leer los valores desde la consola

//utilizar la funcion "importada" de otro documento
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, "creado".blue.bgCyan))
    .catch( err => console.log(err) );



