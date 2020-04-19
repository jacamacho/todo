require('colors');
const argv = require('./config/yargs').argv;
const toDo = require('./todo/todo');

switch (argv._[0]) {
    case 'crear':
        let tarea = toDo.crearTarea(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = toDo.getListado();
        for (let tarea of listado) {
            console.log('=====POR HACER====='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = toDo.actualizarTarea(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = toDo.borrarTarea(argv.descripcion);
        console.log('Borrado', borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}