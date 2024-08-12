function calcularCalificacion() {
    var fisica = parseFloat(prompt("Ingrese la calificación de Física (0.0 a 5.0):"));
    var quimica = parseFloat(prompt("Ingrese la calificación de Química (0.0 a 5.0):"));
    var biologia = parseFloat(prompt("Ingrese la calificación de Biología (0.0 a 5.0):"));
    var matematicas = parseFloat(prompt("Ingrese la calificación de Matemáticas (0.0 a 5.0):"));
    var informatica = parseFloat(prompt("Ingrese la calificación de Informática (0.0 a 5.0):"));

    var promedio = (fisica + quimica + biologia + matematicas + informatica) / 5;

    var calificacion = "";
    if (promedio >= 0 && promedio < 3.0) {
        calificacion = "mala";
    } else if (promedio >= 3.0 && promedio < 4.0) {
        calificacion = "buena";
    } else if (promedio >= 4.0) {
        calificacion = "excelente";
    }

    var porcentaje = (promedio / 5.0) * 100;

    alert("Promedio: " + promedio.toFixed(2) + "\n" +
        "Porcentaje: " + porcentaje.toFixed(2) + "%\n" +
        "Calificación: " + calificacion);
}
calcularCalificacion();

