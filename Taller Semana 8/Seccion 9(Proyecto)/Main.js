//Punto 5

//Areglo Notas
let notas = [];

//agregarNota();
function agregarNota() {
    let inputNota = document.getElementById('nota');
    let nuevaNota = document.
    notas.push(nuevaNota);
    notasAgregadas = notas.length;
    inputNota.value = '';
    mostrarNotas();
}

//mostrarNotas();
function mostrarNotas() {
    let listaNotas = document.getElementById('listaNotas');
    listaNotas.innerHTML = '';
    for(let i = 0; i < notas.length; i++) {
        let li = document.createElement('li');
        li.textContent = 'Nota'+ (i+1) + ':'+ notas[i];
        listaNotas.appendChild(li);
    }
}

//editarNotas();

function editarNotas() {
    let inputNota = document.getElementById('editarNota');
    let indexNota = parseInt(inputNota.dataset.index);
    let nuevaNota = parseFloat(inputNota.value);
    notas[indexNota] = nuevaNota;
    inputNota.value = '';
    mostrarNotas();
}

//eliminarNota();

function eliminarNota() {
    let indexNota = parseInt(this.dataset.index);
    notas.splice(indexNota, 1);
    mostrarNotas();
}

//filtrarNotas();

function filtrarNotas() {
    let minimo = parseFloat(document.getElementById('minimo').value);
    let maximo = parseFloat(document.getElementById('maximo').value);
    let listaNotasFiltradas = notas.filter(n => n >= minimo && n <= maximo);
    let listaNotas = document.getElementById('listaNotas');
    listaNotas.innerHTML = '';
    for(let i = 0; i < listaNotasFiltradas.length; i++) {
        let li = document.createElement('li');
        li.textContent = 'Nota'+ (i+1) + ':'+ listaNotasFiltradas[i];
        listaNotas.appendChild(li);
    }
}