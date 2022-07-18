const lista1 = [
    400,
    600,
    500,
    200,
];

const ordenar = lista1.sort();//ordenara los elementos de un array

const mitadLista1 = parseInt(ordenar.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

let mediana;

if (esPar(ordenar.length)) {
    const elemento1 = ordenar[mitadLista1 - 1];
    const elemento2 = ordenar[mitadLista1];

    const promedioElemento1y2 = calcularaMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;
    
}else{
    mediana = ordenar[mitadLista1];
}

function calcularaMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}
