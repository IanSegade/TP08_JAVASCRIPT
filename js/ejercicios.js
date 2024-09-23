function ejecutarFuncion()
{
    let opcion = document.getElementById('opcion');

    switch (opcion)
    {
        case "calculadoraEdad":
            calcularEdad();
            break;

        case "calculadoraRecaudacion":
            calcularRecaudacion();
            break;
        
        case "stringConSeparador":
            separarElementosPorComa();
            break;
        
        case "cortarTexto":
            cortarStringPorNumero();
            break;

        case "reemplazarPalabras":
            reemplazarPalabrasDeUnaCadena();
            break;

        case "nombresConA":
            nombresConAdeUnaListaDeNombres();
            break;

        case "TriangulosConAsteriscos":
            mostrarTriangulosDeAsteriscos()
            break;
        
        case "DobleConElementos":
            duplicarNumerosArray();
            break;
        
        case "TirandoFrutas":
            ingresarFrutasYbuscarlas();
            break;

        case "ComparandoDatosYtipos":
            compararDatosYtipos();
            break;
    }
}

function calcularEdad()
{
    let fecha = ingresarFecha();
    calcularEdadConFecha(fecha);
}

function calcularRecaudacion()
{

}

function separarElementosPorComa()
{

}

function cortarStringPorNumero()
{

}

function reemplazarPalabrasDeUnaCadena()
{

}

function nombresConAdeUnaListaDeNombres()
{

}

function mostrarTriangulosDeAsteriscos()
{

}

function duplicarNumerosArray()
{

}

function ingresarFrutasYbuscarlas()
{

}

function compararDatosYtipos()
{

}