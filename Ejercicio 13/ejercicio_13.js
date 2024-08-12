function calcularCostoCeluMovil() {

    var tarifas = {
        1: {
            nombre: "Tigo",
            cargoFijo: 45000,
            valorMinutoInternacional: 200,
            valorPaqueteDatos: 12000
        },
        2: {
            nombre: "Claro",
            cargoFijo: 30000,
            valorMinutoInternacional: 100,
            valorPaqueteDatos: 18000
        },
        3: {
            nombre: "Movistar",
            cargoFijo: 40000,
            valorMinutoInternacional: 250,
            valorPaqueteDatos: 8000
        }
    };

    var operador = parseInt(prompt("Ingrese el número del operador:\n1. Tigo\n2. Claro\n3. Movistar:"));

    if (!(operador in tarifas)) {
        alert("Operador no válido. Por favor, ingrese 1 para Tigo, 2 para Claro o 3 para Movistar.");
        return;
    }

    var minutosInternacionales = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
    var tarifasOperador = tarifas[operador];
    var costoTotal = tarifasOperador.cargoFijo + (tarifasOperador.valorMinutoInternacional * minutosInternacionales);

    alert("Operador: " + tarifasOperador.nombre + "\n" +
        "Cargo fijo: $" + tarifasOperador.cargoFijo + "\n" +
        "Valor minuto internacional: $" + tarifasOperador.valorMinutoInternacional + "\n" +
        "Minutos internacionales consumidos: " + minutosInternacionales + "\n" +
        "Costo total: $" + costoTotal);
}

calcularCostoCeluMovil();

