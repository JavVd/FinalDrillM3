class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productosDisponibles = [
    new Producto("Manzana", 300),
    new Producto("Banana", 150),
    new Producto("Naranja", 200),
    new Producto("Fresa", 250),
    new Producto("Uva", 350),
    new Producto("Pera", 180),
    new Producto("Piña", 400),
    new Producto("Kiwi", 280),
    new Producto("Sandía", 500),
    new Producto("Mango", 320)
];


export { Producto, productosDisponibles };