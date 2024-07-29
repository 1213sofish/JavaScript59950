// Algoritmo con un condicional

//caso de compra

// const PREGUNTA ="Hola, este producto contiene alcohol. ¿Podría decirme su edad?"
// alert (PREGUNTA);
// const EDAD = 18;
// const edadIngresada = prompt("Ingrese su edad: ");
// if (edadIngresada >= EDAD) { 
//     alert("Puede ingresar!")
// } else { 
//     alert(" Perdón tu edad es menor de " + EDAD + " no puede pasar!");
// }

//Calcular el total de su compra

// let precio = +prompt("Ingrese el precio del producto: ");
// let cantidad = +prompt("Ingrese la cantidad del producto: ");
// function calcularTotal( ) {
//     if (precio <= 0) {
//         alert("Por favor, ingrese valores válidos para el precio.");
//     }
//     else if (cantidad <= 0) {
//         alert("Por favor, ingrese valores válidos para la cantidad.");
//     }
//     else{
//         alert ("El total de su compra es " + precio*cantidad);
//     }
// }
// calcularTotal(precio,cantidad)

// Algoritmo de ciclos e iteraciones
//costo de transporte
let numeroComuna = +prompt("Ingresar tu numero de comuna");

while(numeroComuna !== 14 ){
    switch (numeroComuna) {
        case 1:
            alert("Su costo de transporte es de 3000 pesos.");
            break;
        case 2:
            alert("Su costo de transporte es de 2000 pesos.");
            break;
        case 3:
            alert("Su costo de transporte es de 2000 pesos.");
            break;
        case 4:
            alert("Su costo de transporte es de 3000 pesos.");
            break;
        case 5:
            alert("Su costo de transporte es de 2000 pesos.");
            break;
        case 6:
            alert("Su costo de transporte es de 2000 pesos.");
            break;
        case 7:
            alert("Su costo de transporte es de 2000 pesos.");
            break;
        case 8:
            alert("Su costo de transporte es de 3000 pesos.");
            break;
        case 9:
            alert("Su costo de transporte es de 3000 pesos.");
            break;
        case 10:
            alert("Su costo de transporte es de 3000 pesos.");
            break;
        case 11:
            alert("Su costo de transporte es de 3000 pesos.");
            break;
        case 12:
            alert("Su costo de transporte es de 3000 pesos.");
            break;
        case 13:
            alert("Su costo de transporte es de 2000 pesos.");
            break;
        case 15:
            alert("Su costo de transporte es de 2000 pesos.");
            break;
        default:
            alert("Número de comuna no válido.");
            break;
    }
    numeroComuna = +prompt("Ingresar tu número de comuna");
}
alert("Gracias por su compra");
