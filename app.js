// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];

function agregarAmigo() {
    let campoEntrada = document.querySelector("#amigo");
    let nuevoNombre = campoEntrada.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");

    if (nuevoNombre === "") {
        alert("Primero escribe el nombre de tu amigo en el recuadro.");
        return;
    }
    
    if (amigos.includes(nuevoNombre)) {
        alert("Ya está ese amigo en la lista, inserta otro nombre");
        return;
    }
    
    amigos.push(nuevoNombre);
    
    let elementoLista = document.createElement("li");
    elementoLista.textContent = nuevoNombre;
    listaAmigos.appendChild(elementoLista);
    
    campoEntrada.value = ""; 
}

function sortearAmigo() {
    if (amigosSorteados.length === amigos.length) {
        alert("¡Todos los amigos ya han sido sorteados! Todos los participantes son elegibles otra vez. :D");
        amigosSorteados = []; 
    }

    let indiceSorteo = Math.floor(Math.random() * amigos.length);
    let seleccionado = amigos[indiceSorteo];

    if (amigosSorteados.includes(seleccionado)) {
        console.log(`"${seleccionado}" ya fue sorteado. Buscando otro...`);
        return sortearAmigo();
    }

    amigosSorteados.push(seleccionado);

    console.log("Amigo seleccionado:", seleccionado);
    console.log("Amigos ya sorteados:", amigosSorteados);

    let contenedorResultado = document.getElementById("resultado");
    if (!contenedorResultado) {
        console.error("Error, no puedo martha :P");
        return;
    }

    contenedorResultado.innerHTML = `<li> ¡Wow, tu amigo secreto es: <strong class="destaqueresultado">${seleccionado}</strong>! </li>`;
}

function limpiarLista() {
 alert("Limpiando lista :D")
}