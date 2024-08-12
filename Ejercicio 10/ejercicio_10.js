function calcularCostoImpresion() {

    var copias = parseInt(prompt("Ingrese el número de copias que desea imprimir:"));
    var precioPorCopia;
    var precioTotal;

    if (copias >= 0 && copias <= 499) {
        precioPorCopia = 120;
    } else if (copias >= 500 && copias <= 749) {
        precioPorCopia = 100;
    } else if (copias >= 750 && copias <= 999) {
        precioPorCopia = 80;
    } else if (copias >= 1000) {
        precioPorCopia = 50;
    } else {
        alert("Número de copias no válido. Debe ser un número positivo.");
        return;
    }

    precioTotal = copias * precioPorCopia;

    alert("Número de copias: " + copias + "\n" +
        "Precio por copia: $" + precioPorCopia + "\n" +
        "Precio total: $" + precioTotal);
}
calcularCostoImpresion();
