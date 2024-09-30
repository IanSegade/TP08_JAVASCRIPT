import { ingresarFecha, calcularEdadConFecha, ingresarTexto} from './util.js';

function ejecutarFuncion()
{
    let opcion = document.getElementById('opcion').value;

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

window.ejecutarFuncion = ejecutarFuncion; 
function calcularEdad()
{
    let fecha = ingresarFecha();

    console.log("Su edad actual es: " + calcularEdadConFecha(fecha));
}

function calcularRecaudacion()
{
    let texto = ingresarTexto();
    //leti:10,tomi:40,ian:90,lucas:50
    let todoSpliteado;
    let recaudacion;
    let listadoPedidos = texto.split(",");
    //listadoPedidos = ["leti:10" , "tomi:40" , "ian:90" , "lucas:50"]
    for(let parte of listadoPedidos)
    {
        todoSpliteado = parte.split(":");
        recaudacion += parseInt(todoSpliteado[1]);
        //"leti" , "10" , "tomi" , "40" , "ian" , "90" , "lucas" , "50"
    }
    console.log(recaudacion);
}

function separarElementosPorComa()
{
    let listaElementos = ingresarTexto();
    //leti,tomi,ian,lucas,binker,damo,joi
    console.log((listaElementos.split(",")).join('-'));
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