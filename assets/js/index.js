import mensajes from './mensajes.js'

const form = document.querySelector('.formulario');
form.addEventListener('submit', escucharForm);

function escucharForm(e) {
    e.preventDefault();
    const mensaje = e.target.mensaje.value;
    agregarMensaje(mensaje);
}

function agregarMensaje(mensaje) {
    const chat = document.querySelector('.chat')
    const parrafo = document.createElement('p');
    parrafo.textContent = mensaje;
    parrafo.classList.add('derecha')
    chat.appendChild(parrafo);

    const aleatorio = Math.floor(Math.random()*mensajes.length)
    const respuesta = document.createElement('p');
    respuesta.textContent = mensajes[aleatorio];
    chat.appendChild(respuesta);
}