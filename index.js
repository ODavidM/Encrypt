function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let personaje = document.getElementById("personaje");
    let mensaje = document.getElementById("mensaje_incriptado");
    let copiar = document.getElementById("boton_cp");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.trim() !=0) {
        tituloMensaje.textContent = textoCifrado;
        personaje.style.display = 'none'; 
        parrafo.style.display = 'none';
        mensaje.style.top = '5%';
        tituloMensaje.style.fontSize = '20px';
        tituloMensaje.style.textAlign = 'left';

        copiar.disabled = false; // Habilita el botón de copiar
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        swal("Ooops!","Debes de ingresar un texto!","warning")
        copiar.disabled = true; // Deshabilita el botón de copiar si no hay texto
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let personaje = document.getElementById("personaje");
    let mensaje = document.getElementById("mensaje_incriptado");
    let copiar = document.getElementById("boton_cp");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.trim() !== "") {
        tituloMensaje.textContent = textoCifrado;
        personaje.style.display = 'none'; 
        parrafo.style.display = 'none';
        mensaje.style.top = '5%';
        tituloMensaje.style.fontSize = '20px';
        tituloMensaje.style.textAlign = 'left';

        copiar.disabled = false; // Habilita el botón de copiar
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        swal("Ooops!","Debes de ingresar un texto!","warning")
        copiar.disabled = true; // Deshabilita el botón de copiar si no hay texto
    }
}

function copiar() {
    const input = document.querySelector(".texto");
    input.focus();
    let tituloMensaje = document.getElementById("titulo_mensaje").textContent;
    navigator.clipboard.writeText(tituloMensaje).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        alert('Hubo un problema al copiar el texto: ', err);
    });
}
