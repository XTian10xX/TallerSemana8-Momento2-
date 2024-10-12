//Punto 2

const estudiante = {
    nombre: 'Juan Pérez',
    edad: 20,
    direccion: {
        ciudad: 'Medellín',
        calle: 'Calle 10',
        numero: 101
    },
    notas: {
        matematicas: 4.5, 
        ingles: 3.8, 
        ciencias: 4.0
    }
};

let {nombre, direccion = {ciudad}, notas = {matematicas}} = estudiante;

console.log("Nombre = " + nombre);
console.log("Ciudad = " + direccion.ciudad);
console.log("Notas => Matematicas = " + notas.matematicas);
