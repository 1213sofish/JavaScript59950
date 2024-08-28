let img1 = document.querySelectorAll('.img');
var ahora =0;

function cls(){
    for(let i = 0; i<img1.length;i++){
        img[i].style.display = 'none'
    }
}

function next(){
    cls()
    if(ahora === img1.length-1) ahora = -1
        ahora++;

        img1[ahora].style.display = 'block';
        img1[ahora].style.opacity = '0.4';

        var x = 0.4;
        var intx = setInterval(function(){
            x+=0.1;
            img[ahora].style.opasity = x;
            if(x>=1){
                clearInterval(intx)
                x=0.4;
            }
        },100)
}

function prev(){
    cls()
    if(ahora === 0) ahora = img1.length
        ahora--;

        img1[ahora].style.display = 'block';
        img1[ahora].style.opacity = '0.4';

        var x = 0.4;
        var intx = setInterval(function(){
            x+=0.1;
            img[ahora].style.opasity = x;
            if(x>=1){
                clearInterval(intx)
                x=0.4;
            }
        },100)
}

function start(){
    cls()
    img1[ahora].style.display = 'block';
}
start();



// // oferta 90%
// const oferta90 = 0.9
// const cantidadDeCompra = prompt("Ingrese cantidad de tu compra: ");
// const precioDeCompra = prompt("Ingrese precio de tu compra: ");
// const totalDeCompra = cantidadDeCompra*precioDeCompra*oferta90
// alert ("Su precio total con descuento es " + totalDeCompra)

// // oferta fin de semana
// const hoy = new Date();
// console.log (hoy)
// console.log (hoy.getDay())

// const dayOfWeek =  hoy.getDay();
// if (dayOfWeek === 0 || dayOfWeek === 6 ){
//     alert("Hoy tenemos 3x2, ven a ver la oferta")
// } else {
//     alert("¡Que tengas un buen día!")
// }