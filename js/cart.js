// carrito.js

const productos = [
    { id: 1, nombre: 'Chocotorta', precio: 19000, imagen: 'css/img/1.jpg' },
    { id: 2, nombre: 'Torta Marroc', precio:19000, imagen: 'css/img/2.jpg' },
    { id: 3, nombre: 'Vanilla', precio:19000, imagen: 'css/img/3.jpg' },
];

let carrito = [];
let costoEnvio = 0;

// Cargar carrito de localStorage
function cargarCarritoDeStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        carrito.forEach(item => crearElementoCarrito(item)); 
        actualizarTotal();
    }
}

// Guardar carrito en localStorage
function guardarCarritoEnStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Mostrar mensaje de información
function mostrarMensaje(mensaje, tipo = 'error') {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.display = 'block';

    if (tipo === 'exito') {
        mensajeDiv.style.backgroundColor = '#d4edda';
        mensajeDiv.style.color = '#155724';
        mensajeDiv.style.borderColor = '#c3e6cb';
    } else {
        mensajeDiv.style.backgroundColor = '#f8d7da';
        mensajeDiv.style.color = '#721c24';
        mensajeDiv.style.borderColor = '#f5c6cb';
    }

    setTimeout(() => {
        mensajeDiv.style.display = 'none';
    }, 3000);
}

// Inicializar la lista de productos
function mostrarProductos(productosFiltrados = productos) {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; 

    productosFiltrados.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto';
        
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.style.width = '100%';
        imagen.style.height = 'auto';
        
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;

        const precio = document.createElement('p');
        precio.textContent = `Precio: $${producto.precio}`;

        const boton = document.createElement('button');
        boton.textContent = 'Añadir al Carrito';
        boton.onclick = () => añadirAlCarrito(producto.id);

        productoDiv.append(imagen, nombre, precio, boton);
        listaProductos.appendChild(productoDiv);
    });
}

// Añadir producto al carrito
function añadirAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    const elementoCarrito = carrito.find(item => item.id === productoId);

    if (elementoCarrito) {
        elementoCarrito.cantidad++;
        actualizarElementoCarrito(elementoCarrito);
    } else {
        const nuevoElemento = { ...producto, cantidad: 1 };
        carrito.push(nuevoElemento);
        crearElementoCarrito(nuevoElemento);
    }

    actualizarTotal();
    guardarCarritoEnStorage();
    mostrarMensaje('Producto añadido al carrito', 'exito');
}

// Crear un elemento del carrito
function crearElementoCarrito(item) {
    const elementosCarritoDiv = document.getElementById('elementos-carrito');
    
    const elementoCarritoDiv = document.createElement('div');
    elementoCarritoDiv.className = 'elemento-carrito';
    elementoCarritoDiv.id = `carrito-item-${item.id}`;

    const nombre = document.createElement('h3');
    nombre.textContent = item.nombre;

    const precio = document.createElement('p');
    precio.textContent = `Precio: $${item.precio}`;

    const cantidad = document.createElement('p');
    cantidad.textContent = `Cantidad: ${item.cantidad}`;
    cantidad.id = `carrito-item-cantidad-${item.id}`;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => eliminarDelCarrito(item.id);

    elementoCarritoDiv.append(nombre, precio, cantidad, botonEliminar);
    elementosCarritoDiv.appendChild(elementoCarritoDiv);
}

// Actualizar un elemento del carrito
function actualizarElementoCarrito(item) {
    const cantidadElemento = document.getElementById(`carrito-item-cantidad-${item.id}`);
    cantidadElemento.textContent = `Cantidad: ${item.cantidad}`;
}

// Eliminar producto del carrito
function eliminarDelCarrito(productoId) {
    const indiceElementoCarrito = carrito.findIndex(item => item.id === productoId);

    if (indiceElementoCarrito !== -1) {
        carrito[indiceElementoCarrito].cantidad--;
        if (carrito[indiceElementoCarrito].cantidad === 0) {
            carrito.splice(indiceElementoCarrito, 1);
            document.getElementById(`carrito-item-${productoId}`).remove();
        } else {
            actualizarElementoCarrito(carrito[indiceElementoCarrito]);
        }
    }

    actualizarTotal();
    guardarCarritoEnStorage();
    mostrarMensaje('Producto eliminado del carrito', 'exito');
}

// Actualizar total del carrito y precio final
function actualizarTotal() {
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    document.getElementById('total-carrito').innerText = total.toFixed(2);
    actualizarPrecioFinal(); 
}

// Actualizar costo de envío y precio final
function actualizarEnvio() {
    const direccionSelect = document.getElementById('direccion');
    costoEnvio = parseFloat(direccionSelect.value);
    document.getElementById('costo-envio').innerText = costoEnvio.toFixed(2);
    actualizarPrecioFinal(); 
}

// Calcular y mostrar el precio final
function actualizarPrecioFinal() {
    const totalProductos = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const precioFinal = totalProductos + costoEnvio;
    document.getElementById('precio-final').innerText = precioFinal.toFixed(2);
}

// Procesar la compra y vaciar carrito
function procesarCompra() {
    if (carrito.length === 0) {
        mostrarMensaje('El carrito está vacío.', 'error');
        return;
    }

    const totalCompra = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toFixed(2);
    const precioFinal = (parseFloat(totalCompra) + costoEnvio).toFixed(2);
    mostrarMensaje(`Compra realizada por un total de $${precioFinal}. ¡Gracias por su compra!`, 'exito');

    // Vaciar el carrito
    carrito = [];
    document.getElementById('elementos-carrito').innerHTML = '';
    actualizarTotal();
    guardarCarritoEnStorage();
}

// Buscar productos
function filtrarProductos() {
    const terminoBusqueda = document.getElementById('barra-busqueda').value.toLowerCase();
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(terminoBusqueda));
    mostrarProductos(productosFiltrados);
}

// Inicializar la página
mostrarProductos();
cargarCarritoDeStorage();