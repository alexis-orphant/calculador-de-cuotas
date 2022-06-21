//calcular cuotas del monto ingresado

function calcularCuotas(precio, numeroDeCuotas){
    switch(numeroDeCuotas){
        //elige 3 cuotas:
        case "3":
            let cuota3 = precio / 3;
            return cuota3 * 1.05;
            break;
        //elige 6 cuotas:
        case "6":
            let cuota6 = precio / 6;
            return cuota6 * 1.15;
            break;
        //elige 12 cuotas:
        case "12":
            let cuota12 = precio / 12;
            return cuota12 * 1.35;
            break;
        // distinto a 3, 6 o 12:
        default:
            return "no ingreso la cantidad de cuotas correctas";
            break;
    }
}

//ingresar el precio del producto
let precioProducto = parseInt(prompt("ingrese el precio del producto"));
//seleccionar la cantidad de cuotas
let cantidadDeCuotas = prompt("ingrese 3, 6 o 12 segun las cuotas deseadas");
//valor de cada cuota segun la cantidad de cuotas elegidas
alert("El precio decada cuota es: $" + calcularCuotas(precioProducto, cantidadDeCuotas));