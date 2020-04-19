const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
};