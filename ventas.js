const VENTAS_BASEE = 5;

function calcularComision(numeroVentas, precioProducto){
    let comision =0;

    if (numeroVentas > VENTAS_BASEE){
        let ventasExtras = numeroVentas -VENTAS_BASEE;
        comision = ventasExtras * (precioProducto * 0.10);
    }
    return comision;
}

function calcular(){
    //Recuperamos propiedades de las caja de texto
    let componenteSueldBase = document.getElementById("txtSueldoBase");
    let componenteVenta = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");
    
    //Recuperamos el valor de las cajas de texto 

    let sueldoBaseStr = componenteSueldBase.value;
    let ventaStr= componenteVenta.value;
    let precioStr  =componentePrecio.value;

    //Convertimos en texto a numero 

    let sueloBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(ventaStr);
    let precioProductos =parseFloat(precioStr);

    let comision = calcularComision(numeroVentas, precioProductos);
    let total = sueloBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueloBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}