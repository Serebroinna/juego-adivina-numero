let numeroSecreto = 0;
let contador = 0;
let numeroMaximo = 10;
let listaNumeroGenerados = [];


//Agrega los mensajes de bienvenida al juego 
function mensajesIniciales(){
    asignarTexto('p',`Escribe un numero del 1 al ${numeroMaximo}`);
    asignarTexto('h1','Adivina el numero secreto');
}
//Inicia el juego
function iniciarJuego(){
    numeroSecreto = generarNumeroSecreto();
    mensajesIniciales();
    contador = 1;
}
//Reinicia el juego 
function reiniciarJuego(){
    //Establecer condiciones iniciales del juego
    iniciarJuego();
    //limpiar caja
    limpiarCaja();
    //deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
//Evalua el numero ingresado por el usuario 
function intentoUsuario(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value); 

    if(numeroUsuario === numeroSecreto){
        //El usuario acierta
        asignarTexto('p',`¡Acertaste en ${contador} ${(contador === 1) ? 'intento!' : 'intentos!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{ 
        //El usuario NO acierta
        if(numeroUsuario > numeroSecreto){
            asignarTexto('p','El numero secreto es menor');
        } else {
            asignarTexto('p','El numero secreto es mayor');
        }
        limpiarCaja();
        contador++;
    }
}
//Agrega texto de manera dinamica en el HTML
function asignarTexto(etiqueta, texto){
    let elemento = document.querySelector(etiqueta);
    elemento.innerHTML = texto;
    return;
}
//Genera el numero secreto
function generarNumeroSecreto() {
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumeroGenerados.length == numeroMaximo){
        alert('Ya se sortearon todos los numeros posibles');
    } else {
        console.log(numeroAleatorio);
        console.log(listaNumeroGenerados);
        if (listaNumeroGenerados.includes(numeroAleatorio)) {
            return generarNumeroSecreto();
            
        } else {
            listaNumeroGenerados.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }     
}
//Limpia el input del usuario
function limpiarCaja(){
    document.getElementById('numeroUsuario').value = ' ';
}


iniciarJuego();
