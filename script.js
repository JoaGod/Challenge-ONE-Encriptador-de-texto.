var ingresoTexto = document.querySelector(".caja-encriptar");
var mensajeEncriptado = document.querySelector(".caja-mensaje");
var botonCopiar = document.querySelector("#btnCopiar");
var botonLimpiar = document.querySelector("#btnLimpiar");
var botonEncriptar = document.querySelector(".btn-Encriptar");
var botonDesencriptar = document.querySelector(".btn-Desencriptar");
var textArea = document.querySelectorAll("textarea");
ingresoTexto.focus();


// VERIFICADOR DE DATOS 
function verificarDatos(texto) {
    var buscar = /[^a-zñ\s]/g;
    texto = ingresoTexto.value;
    if (texto.match(buscar)) {
        swal(
            "¡Ops!",
            "No se permiten textos vacíos, letras mayúsculas, números ni caracteres especiales.",
            "warning"
        );
        ingresoTexto.focus();
        ingresoTexto.value = "";
    }
}

//BOTON ENCRIPTAR
botonEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    verificarDatos();
    texto = ingresoTexto.value;
    textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    mensajeEncriptado.value = textoEncriptado;
    ingresoTexto.value = "";
});

//BOTON DESCENCRIPTAR
botonDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    verificarDatos();
    texto = ingresoTexto.value;
    textoEncriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    mensajeEncriptado.value = textoEncriptado;
    ingresoTexto.value = "";
});

//BOTON COPIAR
botonCopiar.addEventListener("click", function (event) {
    navigator.clipboard.writeText(mensajeEncriptado.value);
    if (mensajeEncriptado.value == "") {
        swal("¡Nada por acá!", "No hay ningun texto para copiar", "error");
    } else {
        swal("¡Copiado!", "El texto se a copiado con exito.", "success");
    }
    mensajeEncriptado.value = "";
    ingresoTexto.focus();
});

//BOTON LIMPIAR TODO
botonLimpiar.addEventListener("click", () => {
    textArea.forEach((textarea) => (textarea.value = ""));
    swal("¡Todo limpio!", "Limpiaste ambas cajas de texto.", "success");
    ingresoTexto.focus();
});