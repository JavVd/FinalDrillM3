import { Producto } from "./Productos.mjs";

class Carrito {
    constructor() {
        this.productos = [];
    }

    // Función para agregar productos al carrito
    agregarProducto(producto, cantidad) {
        // Agregar el producto la cantidad deseada
        for (let i = 0; i < cantidad; i++) {
            this.productos.push(producto);
        }
        this.mostrarCarrito(); // Actualizar el carrito en el HTML
    }

    // Función para calcular el total de la compra
    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    // Función para finalizar la compra
    finalizarCompra() {
        const total = this.calcularTotal();
        alert(`Total a pagar: $${total}. Gracias por su compra.`);
        this.productos = []; // Vaciar el carrito después de la compra
        this.mostrarCarrito(); // Actualizar la vista del carrito
    }

    // Función para mostrar los detalles del carrito en el HTML
    mostrarCarrito() {
        const carritoDiv = document.getElementById("carrito");
        carritoDiv.innerHTML = ""; // Limpiar el contenido actual

        if (this.productos.length === 0) {
            carritoDiv.innerHTML = "<p>El carrito está vacío.</p>";
        } else {
            // Usar un objeto para contar la cantidad de cada producto
            const contadorProductos = {};

            this.productos.forEach(producto => {
                contadorProductos[producto.nombre] = (contadorProductos[producto.nombre] || 0) + 1;
            });

            // Mostrar los productos y sus cantidades en el carrito
            for (const nombre in contadorProductos) {
                const cantidad = contadorProductos[nombre];
                const precio = this.productos.find(p => p.nombre === nombre).precio; // Obtener el precio del producto

                const productoDiv = document.createElement("div");
                productoDiv.textContent = `Producto: ${nombre}, Precio: $${precio}, Cantidad en carrito: ${cantidad}`;
                carritoDiv.appendChild(productoDiv);
            }

            // Mostrar el total
            const totalDiv = document.createElement("div");
            totalDiv.textContent = `Total: $${this.calcularTotal()}`;
            carritoDiv.appendChild(totalDiv);
        }
    }
}

const carrito = new Carrito();

export default Carrito;
