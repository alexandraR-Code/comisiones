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

    //OPCION 1//
    //*Recuperamos propiedades de las caja de texto*//
   // let componenteSueldBase = document.getElementById("txtSueldoBase");
   // let componenteVenta = document.getElementById("txtVentas");
    //let componentePrecio = document.getElementById("txtPrecio");
   //----------------------------------------------------------//
    //*Recuperamos el valor de las cajas de texto*//
    //let sueldoBaseStr = componenteSueldBase.value;
    //let ventaStr= componenteVenta.value;
    //let precioStr  =componentePrecio.value;

    //OPCION 2 UTILIZANDO LA FUNCION GENERICA DE UTILITARIOS.JS//
    //(funtion recuperText)
    let sueldoBaseStr = recuperarText("txtSueldoBase");
    let ventasStr = recuperarText("txtVentas");
    let precioStr = recuperarText("txtPrecio");
    
    //-----------------------------------------------------------
    //OPCION 1 //
    //Convertimos en texto a numero 
    //let sueloBase = parseFloat(sueldoBaseStr);
    //let numeroVentas = parseFloat(ventaStr);
    //let precioProductos =parseFloat(precioStr);

    //OPCION 2 UTILIZANDO LA FUNCION GENERICA DE UTILITARIOS
    //(funtion recuperarFloat)

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProductos = recuperarFloat("txtPrecio");
    //----------------------------------------------------



    let comision = calcularComision(numeroVentas, precioProductos);
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}