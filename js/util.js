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

export function mostrarPrimerTriangulo()
{
    let asterisco = "*";
    for(let i = 1; i <= 5; i++)
    {
        console.log(asterisco.repeat(i));
    }
}

export function mostrarSegundoTriangulo()
{
    let triangulo = "----*----";
    for(let i = 1; i <= 5; i++)
    {
        console.log(triangulo);
        triangulo = triangulo.replace("*-", "**");
        triangulo = triangulo.replace("-*", "**");
    }
}

export function mostrarArrayDuplicado(array)
{
    const duplicados = array.map(nro => nro * 2);
    for(let numero of duplicados)
    {
        console.log(numero);
    }
}

export function buscarFrutaIngresada(array, fruta)
{
    let condicion = false;
    for(let frutaArray of array)
    {
        if(frutaArray === fruta)
        {
            console.log("Si, tenemos " + fruta + "!");
            condicion = true;
        }
    }

    if(condicion != true)
    {
        console.log("No, no tenemos " + fruta + "!");
    }
}

export function comparandoDatosYtiposA()
{
    console.log("A:")
    let condicion = 10 == '10';
    console.log(condicion);
    console.log();
}

export function comparandoDatosYtiposB()
{
    console.log("B:");
    let condicion = 10 === '10';
    console.log(condicion);
    console.log("La diferencia que encontramos es que este a diferencia del A compara los tipos de dato, y por eso da false");
    console.log();
}

export function comparandoDatosYtiposC()
{
    console.log("C:");
    let num = 10.6;
    let tipoNum = typeof(num);
    console.log(tipoNum);
    console.log("10.6 es un dato de tipo number");
    console.log();
}

export function comparandoDatosYtiposD()
{
    console.log("D:");
    let condicion = true == 1;
    console.log(condicion);
    console.log("Podemos afirmar que es cierto porque 0 representa false y 1 true");
}