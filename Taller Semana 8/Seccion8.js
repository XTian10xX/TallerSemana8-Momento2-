//Punto 4

const productos = [
    {nombre: 'Laptop', categoria: 'tecnología', precio: 1000},
    {nombre: 'Smartphone', categoria: 'tecnología', precio: 600},
    {nombre: 'Camisa', categoria: 'ropa', precio: 30},
    {nombre: 'Teclado', categoria: 'tecnología', precio: 50},
    {nombre: 'Zapatillas', categoria: 'ropa', precio: 80}
];

// Filtrar productos por categoría 'tecnología'

const productosTecnologia = productos.filter(producto => producto.categoria === 'tecnología');

console.log('Productos de categoría tecnología:', productosTecnologia);

//Aplicar descuento del 10% a los productos

const productosConDescuento = productosTecnologia.map(producto => {
    const descuento = producto.precio * 0.1;
    const precioConDescuento = producto.precio - descuento;
    return {
        ...producto,
        precio: precioConDescuento
    };
});

console.log('Productos con descuento:', productosConDescuento);

//Calcular el total de los precios con descuento aplicado

const totalPreciosConDescuento = productosConDescuento.reduce((total, producto) => total + producto.precio, 0);

console.log('Total de precios con descuento:', totalPreciosConDescuento);