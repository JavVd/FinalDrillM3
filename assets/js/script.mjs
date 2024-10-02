import { Producto, productosDisponibles } from "./Productos.mjs"; // Importar la lista de productos
import Carrito from "./Carrito.mjs";

const carrito = new Carrito(); // Crear instancia del carrito

// Función para mostrar los productos disponibles en el HTML
function mostrarProductosDisponibles() {
    const productosDiv = document.getElementById("productos-disponibles");
    productosDisponibles.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.textContent = `${producto.nombre} - $${producto.precio}`;

        // Crear campo de entrada para la cantidad
        const inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.value = 1; // Valor por defecto
        inputCantidad.min = 1; // Valor mínimo

        // Crear botón para agregar al carrito
        const botonAgregar = document.createElement("button");
        botonAgregar.textContent = "Agregar al carrito";
        botonAgregar.addEventListener("click", () => {
            const cantidad = parseInt(inputCantidad.value);
            if (cantidad > 0) {
                carrito.agregarProducto(producto, cantidad);
            } else {
                alert("Por favor, ingrese una cantidad válida.");
            }
        });

        productoDiv.appendChild(inputCantidad);
        productoDiv.appendChild(botonAgregar);
        productosDiv.appendChild(productoDiv);
    });
}


// Mostrar los productos al cargar la página
mostrarProductosDisponibles();

// Manejar el evento del botón para finalizar la compra
document.getElementById("finalizar-compra").addEventListener("click", () => {
    carrito.finalizarCompra();
});
