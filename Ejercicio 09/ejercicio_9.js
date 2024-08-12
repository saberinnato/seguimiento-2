function verificarTriangulo() {
    var angulo1 = parseInt(prompt("Ingrese el primer ángulo del triángulo (en grados):"));
    var angulo2 = parseInt(prompt("Ingrese el segundo ángulo del triángulo (en grados):"));
    var angulo3 = parseInt(prompt("Ingrese el tercer ángulo del triángulo (en grados):"));

    if (angulo1 + angulo2 + angulo3 === 180) {
        alert("El triángulo es válido.");
    } else {
        alert("El triángulo no es válido. La suma de los ángulos debe ser 180 grados.");
    }
}

verificarTriangulo();
