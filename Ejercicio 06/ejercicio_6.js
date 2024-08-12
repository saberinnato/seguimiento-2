function encontrarNumeroMayor() {
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    var numero3 = parseFloat(prompt("Ingrese el tercer número:"));

    var mensaje;
    if (numero1 === numero2 && numero2 === numero3) {
        mensaje = "Los tres números son iguales.";
    } else if (numero1 === numero2) {
        if (numero1 > numero3) {
            mensaje = "El número mayor es: " + numero1;
        } else if (numero1 < numero3) {
            mensaje = "El número mayor es: " + numero3;
        } else {
            mensaje = "El número mayor es: " + numero1 + " (Los dos primeros números son iguales y mayores que el tercero)";
        }
    } else if (numero2 === numero3) {
        if (numero2 > numero1) {
            mensaje = "El número mayor es: " + numero2;
        } else if (numero2 < numero1) {
            mensaje = "El número mayor es: " + numero1;
        } else {
            mensaje = "El número mayor es: " + numero2 + " (Los dos últimos números son iguales y mayores que el primero)";
        }
    } else if (numero1 === numero3) {
        if (numero1 > numero2) {
            mensaje = "El número mayor es: " + numero1;
        } else if (numero1 < numero2) {
            mensaje = "El número mayor es: " + numero2;
        } else {
            mensaje = "El número mayor es: " + numero1 + " (Los primeros y últimos números son iguales y mayores que el segundo)";
        }
    } else {
        if (numero1 > numero2 && numero1 > numero3) {
            mensaje = "El número mayor es: " + numero1;
        } else if (numero2 > numero1 && numero2 > numero3) {
            mensaje = "El número mayor es: " + numero2;
        } else {
            mensaje = "El número mayor es: " + numero3;
        }
    }

    alert(mensaje);
}

encontrarNumeroMayor();

