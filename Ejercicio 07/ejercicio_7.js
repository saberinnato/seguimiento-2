function calcularAyudaMensual() {
    var genero = prompt("Ingrese el género (masculino/femenino):").toLowerCase();
    var edad = parseInt(prompt("Ingrese la edad:"));

    var ayuda;

    // Determinar el monto de la ayuda según el género y la edad
    if (genero === "femenino") {
        if (edad > 50) {
            ayuda = 120000;
        } else if (edad >= 30 && edad <= 50) {
            ayuda = 100000;
        } else {
            ayuda = 0; // No recibe ayuda si es menor de 30 años
        }
    } else if (genero === "masculino") {
        ayuda = 40000;
    } else {
        ayuda = 0; // No recibe ayuda si el género ingresado es inválido
    }

    // Mostrar el monto de la ayuda en un cuadro de alerta
    alert("El valor recibido mensual de ayuda es: $" + ayuda);
}

// Llamar a la función para que se ejecute al cargar la página
calcularAyudaMensual();
