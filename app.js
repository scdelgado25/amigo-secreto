let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (!nombre) {
        alert('¡Ingresa un nombre válido!');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('¡Agrega amigos primero!');
        return;
    }

    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 ¡${amigos[indiceGanador]} es el amigo secreto! 🎉</li>`;
}