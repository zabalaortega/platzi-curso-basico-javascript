function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 -descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calcularDescuento(){
    price = document.getElementById('inputPrice');
    discount = document.getElementById('inputDiscount');
    result = document.getElementById('result');

    const priceValue = price.value;
    const discountValue = discount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    result.innerText = `El precio con descuento son: $${precioConDescuento}`;
}

//Solucion numero dos

function calcularDes(){
    const inpPrice = document.getElementById('inpPrice').value;
    const cuponDescuento = document.getElementById('cupones').value;
    const resultadoCupon = document.getElementById('resultadoCupon');

    const descuentoConCupon = calcularPrecioConDescuento(inpPrice, cuponDescuento);
    resultadoCupon.innerText = `El precio con descuento son: $${descuentoConCupon}`;

}