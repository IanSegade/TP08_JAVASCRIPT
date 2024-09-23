export function ingresarFecha()
{
    let fecha = prompt("Ingrese una fecha");
    return fecha;
}

export function calcularEdadConFecha(fecha)
{
    fechaActual = new Date();
    fechaIngresada = new Date (fecha);

    let edad = fechaActual.GetFullYear() - fechaIngresada.GetFullYear();
    if(fechaActual.GetMonth() > fechaIngresada.GetMonth() | ((fechaActual.GetMonth() = fechaIngresada.GetMonth()) && (fechaActual.GetDay() >= fechaIngresada.GetDay())))
    {
        edad++;
    }

    return edad;
}