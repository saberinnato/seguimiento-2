function verificarEstadoComputadora() {
    var emitePitido = parseInt(prompt("¿La computadora emite un pitido al iniciarse? \n1 Sí \n2 No"));
    var discoGira = parseInt(prompt("¿El disco duro gira al iniciarse? \n1 Sí \n2 No"));
    var mensaje;

    if (emitePitido === 1 && discoGira === 1) {
        mensaje = "Póngase en contacto con el técnico de apoyo.";
    } else if (emitePitido === 1 && discoGira === 2) {
        mensaje = "Verificar contactos de la unidad.";
    } else if (emitePitido === 2 && discoGira === 1) {
        mensaje = "Compruebe las conexiones de altavoces.";
    } else if (emitePitido === 2 && discoGira === 2) {
        mensaje = "Traiga la computadora para repararla en la central.";
    } else {
        mensaje = "Entrada no válida. Por favor, ingrese 1 para sí o 2 para no.";
    }

    alert(mensaje);
}
verificarEstadoComputadora();
