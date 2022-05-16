
const fs = require('fs'); //importacion de file system en node, revisar documentación
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    
    try {

        //variables
        let multiplicacion = 1;
        let salida, consola = "";

        //imprimir la tabla de multiplicar en consola
        while( multiplicacion <= hasta) {
             consola += (`${base} ${'x'.blue} ${multiplicacion} ${ '='.blue } ${multiplicacion * base}\n`);
             salida += (`${base} x ${multiplicacion} = ${multiplicacion * base}\n`);
            multiplicacion += 1;
        }

        //validar si la opción de listar existe
        if(listar) {
            
            console.log("=======================".green);
            console.log('   Tabla del:'.green, colors.blue( base ));
            console.log("=======================".green);

            console.log(consola); //imprime la tabla

        } else {
            console.log('La opcion listar en pantalla no existe'.red);
        }
    
        //guarda un archivo de texto con la funcion writeFile desde fs, consultar documentación
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`
        
    } catch (error) {
        throw error;
    }
}

//exportacion de la funcion segun Node (no permite modulos)
module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}