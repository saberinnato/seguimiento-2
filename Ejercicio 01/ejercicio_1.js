function calcularSalario() {
    //Pedir datos sobre el nombre y horas trabajadas al usuario
    var nombre = prompt("Ingrese su nombre");
    var horasTrabajadas = parseInt(prompt("Ingrese el número de horas trabajadas"));
    var salario = 0;

    //Calcular el salario segun las horas trabajadas
    if(horasTrabajadas <= 10) {
        salario = horasTrabajadas * 30000;
    } else {
        salario = (10 * 30000) + ((horasTrabajadas - 10) *33000)
    }

    //Mensaje en cuadro de alerta
    alert(nombre + ", el número de horas es " + horasTrabajadas + " y su salario equivale a $" + salario + " COP.")
    
}
calcularSalario();