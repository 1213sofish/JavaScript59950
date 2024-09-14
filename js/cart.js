let carrito = [];
let productosGlobal = [];

// Cargar carrito de localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    }
}

// Guardar carrito en localStorage
function guardarCarritoEnStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar productos desde el archivo JSON
fetch('productos.json')
    .then(response => response.json())
    .then(productos => {
    productosGlobal = productos; 
    mostrarProductos(productos); 
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

// Función para mostrar productos
function mostrarProductos(productos) {
    const container = document.getElementById('productosContainer');
    container.innerHTML = ''; 
    productos.forEach(producto => {
    // Crear un contenedor para cada producto
    const divProducto = document.createElement('div');
    divProducto.classList.add('producto');
    divProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio.toFixed(2)}</p>
        <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Añadir al carrito</button>
    `;
    container.appendChild(divProducto);
    });
}

// Función para filtrar productos según el texto de búsqueda
function filtrarProductos() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const productosFiltrados = productosGlobal.filter(producto =>
    producto.nombre.toLowerCase().includes(searchText)
    );
    mostrarProductos(productosFiltrados); 
}

// Actualiza el contador en el ícono del carrito
function actualizarContadorCarrito() {
    document.getElementById('contadorCarrito').innerText = carrito.length;
}

// Agrega productos al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    guardarCarritoEnStorage(); 
    actualizarContadorCarrito();

    // Confirmación con SweetAlert2
    Swal.fire({
    title: 'Producto añadido',
    text: `${nombre} ha sido añadido al carrito.`,
    icon: 'success',
    showConfirmButton: false,
    timer: 1500
    });
}

// Elimina un producto del carrito según su índice
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1); 
    guardarCarritoEnStorage();
    actualizarContadorCarrito();
    mostrarCarrito(); 
}

// Muestra el contenido del carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
    Swal.fire({
        title: 'Carrito vacío',
        text: 'No has añadido ningún producto al carrito.',
        icon: 'info',
        confirmButtonText: 'OK'
    });
    return;
    }

    // Genera el contenido del carrito en HTML
    let contenidoCarrito = '<ul style="text-align: left;">';
    let total = 0;
    carrito.forEach((item, index) => {
    contenidoCarrito += `
        <li>
        ${index + 1}. ${item.nombre} - $${item.precio.toFixed(2)}
        <button onclick="eliminarDelCarrito(${index})" style="color:red; margin-left:10px;">Eliminar</button>
        </li>`;
    total += item.precio;
    });
    contenidoCarrito += '</ul>';
    contenidoCarrito += `<p><strong>Total productos: $${total.toFixed(2)}</strong></p>`;

    // SweetAlert2 para mostrar el carrito y opciones de envío
    Swal.fire({
    title: 'Tu carrito',
    html: contenidoCarrito + `
        <hr>
        <p>Elige una opción de envío:</p>
        <select id="opcionEnvio" class="swal2-input">
        <option value="250">Ciudad - $250.00</option>
        <option value="500">Suburbio - $500.00</option>
        <option value="1000">Rural - $1000.00</option>
        </select>
    `,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Proceder al pago',
    cancelButtonText: 'Seguir comprando',
    focusConfirm: false,
    preConfirm: () => {
        const envio = document.getElementById('opcionEnvio').value;
        return envio;
    }
    }).then((result) => {
    if (result.isConfirmed) {
        const costoEnvio = parseFloat(result.value);
        const totalConEnvio = total + costoEnvio;

        // Confirmación de pago
        Swal.fire({
        title: 'Confirmar pago',
        html: `
            <p>Total productos: $${total.toFixed(2)}</p>
            <p>Costo de envío: $${costoEnvio.toFixed(2)}</p>
            <hr>
            <p><strong>Total: $${totalConEnvio.toFixed(2)}</strong></p>
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirmar pago',
        cancelButtonText: 'Cancelar'
        }).then((confirmar) => {
        if (confirmar.isConfirmed) {
            // Simulación del proceso de pago
            Swal.fire({
            title: '¡Pago exitoso!',
            text: `Gracias por tu compra, el total es $${totalConEnvio.toFixed(2)}.`,
            icon: 'success',
            confirmButtonText: 'OK'
            });
            
            // Vaciar el carrito
            carrito = [];
            guardarCarritoEnStorage(); 
            actualizarContadorCarrito();
        }
        });
    }
    });
}

// Cargar el carrito al cargar la página
cargarCarrito();
actualizarContadorCarrito();