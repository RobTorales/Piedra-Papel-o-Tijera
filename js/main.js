let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;


    if (eleccionPC === 0) {
        eleccionPC = "cuarzo💎"
    } else if (eleccionPC === 1) {
        eleccionPC = "papiro🧾"
    } else if (eleccionPC === 2) {
        eleccionPC = "navaja🪒"
    }


    if (
        (eleccionUsuario === "cuarzo💎" && eleccionPC === "navaja🪒") ||
        (eleccionUsuario === "navaja🪒"&& eleccionPC === "papiro🧾") ||
        (eleccionUsuario === "papiro🧾"&& eleccionPC === "cuarzo💎")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "cuarzo💎" && eleccionUsuario === "navaja🪒") ||
        (eleccionPC === "navaja🪒"&& eleccionUsuario === "papiro🧾") ||
        (eleccionPC === "papiro🧾"&& eleccionUsuario === "cuarzo💎")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            let gifElement = document.createElement("img")
            gifElement.src = "./images/gigachad.gif"

            instrucciones.innerText = "🧐¡Que sigma!🧐"
            instrucciones.appendChild(gifElement);
        }

        if (puntosPC === 5) {
            let pngElement = document.createElement("img")
            pngElement.src = "./images/virgin.png"

            instrucciones.innerText = "🤣¡La CPU te domó sos un virgin!🤣"
            instrucciones.appendChild(pngElement);
        }

        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }


}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "🤑¡Ganaste un punto!🤑"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "😂¡La CPU ganó un punto!😂"
}

function empate() {
    contenedorGanaPunto.innerText = "🤝¡Empate!🤝"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana."
}