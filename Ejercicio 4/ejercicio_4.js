function verificarPar() {

    var numero = parseInt(prompt("Ingrese un número:"));

    if (numero % 2 === 0) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}

verificarPar();
