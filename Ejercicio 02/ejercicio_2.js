function verificarNumero() {
    // Pedir número
    var numero = parseFloat(prompt("Ingrese un número:"));
    
    // Verificarel número
    if (numero > 0) {
        alert("El número " + numero + " es positivo.");
    } else if (numero < 0) {
        alert("El número " + numero + " es negativo.");
    } else {
        alert("El número es cero.");
    }
}
verificarNumero();
