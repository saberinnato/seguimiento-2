function calcularCostoAlquiler() {

    var cantidadLavadoras = parseInt(prompt("Ingrese la cantidad de lavadoras que desea alquilar:"));
    var tipoLavadora = parseInt(prompt("Ingrese el valor segun la opción deseada: \n1. Lavadora grande \n2. Lavadora pequeña"));
    var horasAlquiler = parseFloat(prompt("Ingrese la cantidad de horas que desea alquilar:"));

    var costoPorHora = 0;
    var costoTotal = 0;

    if (tipoLavadora === 1) {
        costoPorHora = 4000;
    } else if (tipoLavadora === 2) {
        costoPorHora = 3000;
    } else {
        alert("Tipo de lavadora inválido. Por favor ingrese 1 o 2.");
        return;
    }

    costoTotal = cantidadLavadoras * costoPorHora * horasAlquiler;

    if (cantidadLavadoras > 3) {
        costoTotal = costoTotal * 0.03; // Aplicar un 3% de descuento
    }

    alert("El costo total a pagar es de $" + costoTotal.toFixed(2));
}
calcularCostoAlquiler();
