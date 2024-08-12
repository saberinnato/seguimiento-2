function calcularCostoGimnasio() {
    var dias = parseInt(prompt("Ingrese la cantidad de días deseados:"));
    var costo;

    if (dias === 15) {
        costo = 18000;
    } else if (dias === 30) {
        costo = 35000;
    } else if (dias === 90) {
        costo = 86000;
    } else {
        alert("Periodo no válido. Por favor, ingrese 15, 30 o 90 días.");
        return;
    }

    alert("El costo para " + dias + " días es: $" + costo);
}

calcularCostoGimnasio();
