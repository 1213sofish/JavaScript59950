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

// // Algoritmo de ciclos e iteraciones
// //costo de transporte
// let numeroComuna = +prompt("Ingresar tu numero de comuna");

// while(numeroComuna !== 14 ){
//     switch (numeroComuna) {
//         case 1:
//             alert("Su costo de transporte es de 3000 pesos.");
//             break;
//         case 2:
//             alert("Su costo de transporte es de 2000 pesos.");
//             break;
//         case 3:
//             alert("Su costo de transporte es de 2000 pesos.");
//             break;
//         case 4:
//             alert("Su costo de transporte es de 3000 pesos.");
//             break;
//         case 5:
//             alert("Su costo de transporte es de 2000 pesos.");
//             break;
//         case 6:
//             alert("Su costo de transporte es de 2000 pesos.");
//             break;
//         case 7:
//             alert("Su costo de transporte es de 2000 pesos.");
//             break;
//         case 8:
//             alert("Su costo de transporte es de 3000 pesos.");
//             break;
//         case 9:
//             alert("Su costo de transporte es de 3000 pesos.");
//             break;
//         case 10:
//             alert("Su costo de transporte es de 3000 pesos.");
//             break;
//         case 11:
//             alert("Su costo de transporte es de 3000 pesos.");
//             break;
//         case 12:
//             alert("Su costo de transporte es de 3000 pesos.");
//             break;
//         case 13:
//             alert("Su costo de transporte es de 2000 pesos.");
//             break;
//         case 15:
//             alert("Su costo de transporte es de 2000 pesos.");
//             break;
//         default:
//             alert("Número de comuna no válido.");
//             break;
//     }
//     numeroComuna = +prompt("Ingresar tu número de comuna");
// }
// alert("Gracias por su compra");



//2 Pre entrega
// //Arrays productos
class Producto{
    constructor(nombre,precio,categoría){
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.categoría = categoría.toUpperCase();
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}
const productos = [];

productos.push(new Producto("Chocotorta","19000","Tarta de crema"));
productos.push(new Producto("Vanilla","19000","Tarta de crema"));
productos.push(new Producto("Frutilla","19000","Tarta de crema"));
productos.push(new Producto("Torta Marroc","19000","Tarta de crema"));
productos.push(new Producto("Torta personalizada","35000","Tarta de crema"));
productos.push(new Producto("Chocolate","19000","Budin"));
productos.push(new Producto("Vanilla","19000","Budin"));
productos.push(new Producto("Frutilla","19000","Budin"));

for( const torta of productos) {
    torta.sumarIva();
}
// console.log(productos);

// // Metodo find de productos
// const resultado = productos.find((el) => el.nombre === "CHOCOTORTA");
// console.log(resultado);
// const resultadoVanilla = productos.find((el) => el.nombre === "VANILLA");
// console.log(resultadoVanilla);
// const resultadoTartaDeCrema = productos.find((el) => el.categoría === "TARTA DE CREMA");
// console.log(resultadoTartaDeCrema);
// const resultadoBudin = productos.find((el) => el.categoría === "BUDIN");
// console.log(resultadoBudin);

// // Metodo filter de productos
// const resultado = productos.filter((el) => el.precio > 20000);
// console.log(resultado);
// const resultado2 = productos.filter((el) => el.precio > 40000);
// console.log(resultado2);


// // Metodo map de productos
// const actualizado = productos.map((el) =>{
//     return{
//         nombre: el.nombre ,
//         precio: el.precio 
//     }
// })
// console.log(actualizado)

// // Metodo sort de productos
// productos.sort((a, b)=> {
//     if (a.nombre > b.nombre){
//         return 1;
//     }
//     if (a.nombre < b.nombre){
//         return -1;
//     }
//     return 0;
// })

// // oferta 90%
// const oferta90 = 0.9
// const cantidadDeCompra = prompt("Ingrese cantidad de tu compra: ");
// const precioDeCompra = prompt("Ingrese precio de tu compra: ");
// const totalDeCompra = cantidadDeCompra*precioDeCompra*oferta90
// alert ("Su precio total con descuento es " + totalDeCompra)

// // oferta fin de semana
const hoy = new Date();
console.log (hoy)
console.log (hoy.getDay())

const dayOfWeek =  hoy.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6 ){
    alert("Hoy tenemos 3x2, ven a ver la oferta")
} else {
    alert("¡Que tengas un buen día!")
}