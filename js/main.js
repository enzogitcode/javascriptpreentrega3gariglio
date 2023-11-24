const productosArray = [
    { nombre: 'Pavlova', precio: 13000 },
    { nombre: 'Tarta de frutas', precio: 13800 },
    { nombre: 'Rogel', precio: 10000 },
    { nombre: 'Medialunas (docena)', precio: 1250 },
    { nombre: 'Cheesecake', precio: 10000 },
    { nombre: 'Torta Oreo', precio: 10000 },
]
const contenedorProductos = document.querySelector("#cardsContainer")

function crearCardHTML(producto) {
    return `<div class="cardBody">
    <div class="cardImg"><img src="" alt=""></div>
    <div class="cardTitle">${producto.nombre}</div>
    <div class="cardPrecio">${producto.precio}</div>
    <button class="addCart" onclick="agregarAlCarrito(${productosArray.indexOf(producto)})">Agregar al carrito</button>
</div>`
}

productosArray.forEach(producto => {
    const cardHTML = crearCardHTML(producto);
    contenedorProductos.innerHTML += cardHTML;
});

const carritoLista = document.querySelector("#carritoLista");
const carrito = [];
function agregarAlCarrito(index) {
    carrito.push(productosArray[index]);

    const nuevoItemCarrito = document.createElement('li');
    nuevoItemCarrito.textContent = productosArray[index].nombre + productosArray[index].precio;
    carritoLista.appendChild(nuevoItemCarrito);
}
function crearError() {
    return `<div class="divError">Hubo un error, intentá nuevamente</div> `
}
function cargarCarrito() {
    if (productos.lenght > 0) {
        container.innerHTML = ""
        producto.forEach((producto) => producto.innerHTML += crearCardHTML(producto))
    }
}



