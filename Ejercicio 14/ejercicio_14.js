function calcularCostoSandwich() {

    var precios = {
        tamano: {
            pequeno: 6000,
            grande: 12000
        },
        ingredientes: {
            tocineta: 3000,
            jalapeno: 0,
            pavo: 3000,
            queso: 2500
        }
    };


    var tamano = parseInt(prompt("Ingrese el tamaño del sándwich:\n1. Pequeño\n2. Grande"));
    if (tamano === 1) {
        tamano = "pequeno";
    } else if (tamano === 2) {
        tamano = "grande";
    } else {
        alert("Tamaño no válido. Por favor, ingrese 1 para Pequeño o 2 para Grande.");
        return;
    }

    var ingredientes = [];
    var ingredientesDisponibles = ["tocineta", "jalapeno", "pavo", "queso"];
    
    for (var i = 0; i < ingredientesDisponibles.length; i++) {
        var respuesta = parseInt(prompt("¿Desea agregar " + ingredientesDisponibles[i] + "?\n1. Sí\n2. No"));
        if (respuesta === 1) {
        ingredientes.push(ingredientesDisponibles[i]);
        }
    }

    var costoTamano = precios.tamano[tamano];
    var costoIngredientes = ingredientes.reduce(function(total, ingrediente) {
        return total + precios.ingredientes[ingrediente];
    }, 0);
    var costoTotal = costoTamano + costoIngredientes;
    alert("Tamaño del sándwich: " + (tamano === "pequeno" ? "Pequeño" : "Grande") + "\n" +
        "Costo del tamaño: $" + costoTamano + "\n" +
        "Ingredientes adicionales: " + (ingredientes.length > 0 ? ingredientes.join(", ") : "Ninguno") + "\n" +
        "Costo de ingredientes: $" + costoIngredientes + "\n" +
        "Costo total: $" + costoTotal);
}
calcularCostoSandwich();

