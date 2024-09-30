import { ingresarFecha, calcularEdadConFecha, ingresarTexto, ingresarNumero} from './util.js';

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
    let texto = ingresarTexto("Ingrese los elementos (persona:monto,persona2:monto2)");
    //leti:10,tomi:40,ian:90,lucas:50
    let todoSpliteado;
    let recaudacion = 0;
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
    let listaElementos = ingresarTexto("Ingrese lista separada por ', ' ");
    //leti, tomi, ian, lucas, binker, damo, joi
    console.log((listaElementos.split(", ")).join('-'));
}

function cortarStringPorNumero()
{
    let texto = ingresarTexto("Ingresar texto");
    //Un dia, leti se desperto en un campo de tulipanes, desorientada y confundida.
    let num = ingresarNumero();
    console.log(texto.slice(0, num))
}

function reemplazarPalabrasDeUnaCadena()
{
    let texto = ingresarTexto("Ingresar texto");
    //Un dia, leti se desperto en un campo de tulipanes, desorientada y confundida.
    let remplazar = ingresarTexto("Ingresar texto que queres remplazar");
    //leti
    let remplazo = ingresarTexto("Ingresar remplazo");
    //lucas
    console.log(texto.replace(remplazar , remplazo));
}

function nombresConAdeUnaListaDeNombres()
{
    let texto = ingresarTexto("Ingresar lista de nombres: ");
    //Lucas, Andres, Tomas, Mercedes, Anastasia, Valeria, Melanie
    let nombresConA;
    texto = texto.split(", ");
    for(let nombre of texto)
    {
        if(nombre.startsWith('A'))
        {
            console.log(nombre);
        }
    }
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