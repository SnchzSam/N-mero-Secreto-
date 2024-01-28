let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El Usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else {
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorDeUsuario').value = '';
    return;  
}
function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //Si ya se sortearon todos los numeros
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el número está incluído en la lista
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        listaDeNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }   
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p',`Indicame un numero del 1 al ${numeroMaximo}, por favor.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
     //generar el numero aleatorio
     //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}

condicionesIniciales();

let listaGenerica = [];
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"]
lenguagesDeProgramacion.push("Java","Ruby", "GoLang");
function listaCompleta () {
return alert(lenguagesDeProgramacion);
}
