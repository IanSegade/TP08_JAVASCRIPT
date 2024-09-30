export function ingresarFecha()
{
    let fecha = prompt("Ingrese una fecha");
    return fecha;
}

export function calcularEdadConFecha(fecha)
{
    let fechaActual = new Date();
    console.log(fechaActual);
    let fechaIngresada = new Date(fecha)
    let edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();
    if(fechaActual.getMonth() > fechaIngresada.getMonth() || ((fechaActual.getMonth() === fechaIngresada.getMonth()) && (fechaActual.GetDay() >= fechaIngresada.getDay())))
    {
        edad++;
    }
    
    return edad;
}

export function ingresarTexto(mensaje)
{
    let texto = prompt(mensaje);
    return texto;
}

export function ingresarNumero()
{
    let num = prompt("Ingrese un numero:");
    return num;
}