const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error(err);
    });
};

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const crearTarea = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
};

const actualizarTarea = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index > -1) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
};

const borrarTarea = (descripcion) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index > -1) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }
    return false;
};

module.exports = {
    crearTarea,
    borrarTarea,
    getListado,
    actualizarTarea,
};