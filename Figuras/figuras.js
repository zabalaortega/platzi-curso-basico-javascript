const inputCuadrado = document.getElementById('inputCuadrado');

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrados(lado){
    return lado * lado
}

function calcularPerimetroCuadrado(){
    const value = inputCuadrado.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const value = inputCuadrado.value;
    const area = areaCuadrados(value);
    alert(area);
}

//PERIMETRO Y AREA DE UN TRIANGULO

const ladoA = document.getElementById('ladoA');
const ladoB = document.getElementById('ladoB');
const baseT = document.getElementById('base');
const baseArea = document.getElementById('baseArea');
const altura = document.getElementById('altura');

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
} 

function areaTriangulo(base, altura){
    return (base * altura)/2
}

function calcularPerimetroTriangulo(){
    const  valueladoA = Number(ladoA.value);
    const valueladoB = Number(ladoB.value);
    const baseTriangulo = Number(baseT.value);

    const perimetroT = perimetroTriangulo( valueladoA, valueladoB, baseTriangulo);
    alert(perimetroT);
}

function calcularAreaTriangulo(){
    const baseA = Number(baseArea.value);
    const alturaA = Number(altura.value);

    const areaT = areaTriangulo(baseA, alturaA);
    alert(areaT);
}

//CALCULAR AREA Y PERIMETRO DE UN CIRCULO

const diametro = document.getElementById('diametro');
const radio = document.getElementById('radio');

function diametroCirculo(radio){
    return radio * 2;
} 

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}


function calcularPerimetroCirculo(){
    const diametroC = diametro.value;
    const perimetroC = perimetroCirculo(diametroC)
    alert(`El perimetro del circulo es ${perimetroC}`);
}

function calcularAreaCirculo(){
    const radioC = radio.value;
    const areaC = areaCirculo(radioC)
    alert(`Elarea del circulo es ${areaC}`);
}







