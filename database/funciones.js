
// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
        const str = localStorage.getItem(nombre);
        if (!str) {
            throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
        }
        const json = JSON.parse(str);
        const map = new Map(Object.entries(json));
        return map;
}


// Devolver la lista de categorias almacenadas 
function  obtenerCategorias() {
    const map = obtenerMap("categorias");
    return map.values();
}

// Devolver la lista de banners almacenadas 
function  obtenerBanners() {
    const map = obtenerMap("banners");
    return map.values();
}

// Devolver la lista de productos almacenadas 
function  obtenerServicios(categoria = "todos") {
    const map = obtenerMap("servicios");
    //return map.values();
    let servicios = [];
    if (categoria == null || categoria === "todos") {
        servicios = map.values();
    }else{
        servicios = map.values().filter(servicio => servicio.categoria === categoria);
    }
    return servicios;
}

// Obtener el carrito de compras almacenado en sessionStorage
function obtenerCarrito() {
    const str = sessionStorage.getItem('carrito');
    const carrito = str ? JSON.parse(str) : [];
    return carrito;
}

// Mostrar los productos añadidos al carrito de compras
function mostrarCarrito() {
        const carrito = obtenerCarrito();
        const carritoContainer = document.getElementById('carrito');
        carritoContainer.innerHTML = "";
        let precio = 0;
 
        carrito.forEach((servicio,posicion) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between mb-2';
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center ">
                    <div class="row">
                        <h6 class="my-0">${servicio.nombre}</h6>
                        <small>${servicio.precio}</small>
                    </div>
                    <a class="btn btn-danger text-decoration-none text-white" href="#" onclick="eliminarServicio(${posicion})" >
                        <i class="fas fa-times"></i>
                    </a>
                </div>`;
            carritoContainer.appendChild(li);
            precio += servicio.precio;
        });
        const totalElement = document.getElementById('total');
        totalElement.textContent = precio.toFixed(2);

        let span = document.getElementById("contadorCarrito");
        span.textContent = carrito.length;


        //var count = document.querySelector('#contadorCarrito');
        //count.textContent = carrito.length;

        //document.getElementById('contadorCarrito').textContent = carrito.length;
}

// Agregar un servicio al carrito de compras
function agregarServicio(servicio, actualizarCarrito = true) {
    let carrito = obtenerCarrito();
    carrito.push(servicio);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    sessionStorage.setItem("contadorCarrito", carrito.length);
    
    if(actualizarCarrito === true) {
        mostrarCarrito();
    }
}
 
// Eliminar un servicio del carrito de compras
function eliminarServicio(index) {
    let carrito = obtenerCarrito();
    carrito.splice(index, 1);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    sessionStorage.setItem("contadorCarrito", carrito.length);

    mostrarCarrito();
}
 
// Vaciar el carrito de compras
function vaciarCarrito() {
    let carrito = [];
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function obtenerServicioPorCodigo(codigoServicio) {
    const servicios = obtenerMap("servicios");
    const respuesta = servicios.get(codigoServicio);

    if (!respuesta) {
        throw new Error(`No se encontró el servicio con el código: ${codigoServicio}`);
    }
    return respuesta; // Si se encuentra el servicio, devolverlo
}  