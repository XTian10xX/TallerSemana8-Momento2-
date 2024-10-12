//Punto 1

//1.-------------------------------------------------------------------------------

const numeros = [5, 8, 12, 15, 2, 4, 18, 21];

const multiplicacionPorDos = numeros.map(numeros => numeros * 2);

console.log(multiplicacionPorDos);

//2. -------------------------------------------------------------------------------

const numerosMayoresqueDiez = numeros.filter(numeros => numeros > 10);

console.log(numerosMayoresqueDiez);

//3. -------------------------------------------------------------------------------


const total = numerosMayoresqueDiez.reduce((contador, numero) => contador + numero, 0);

console.log(total);