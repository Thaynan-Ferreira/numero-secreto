// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(altura, peso){
    let imc = peso/(altura * altura);
    return imc
}

// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero){
    let vetorial = numero

    for(i = numero-1; i > 0; i--){
        vetorial = vetorial * i;
    }

    return vetorial;
}

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversor(dolar){
    let real = dolar * 4.80;
    return real
}

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaEperimetro(altura, largura){
    console.log(`A area da sala é ${altura*largura}`);
    console.log(`O perimetro da sala é ${2 * (altura + largura)}`);
}

// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaEperimetroCirculo(raio){
    let pi = 3.14;
    console.log(`A area do circulo é ${pi(raio * raio)}`)
    console.log(`O perimetro do circulo é ${2 * pi * raio}`);
}

// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    console.log("---------------")
    console.log(`1 * ${numero} = ${numero*1}`);
    console.log(`2 * ${numero} = ${numero*2}`);
    console.log(`3 * ${numero} = ${numero*3}`);
    console.log(`4 * ${numero} = ${numero*4}`);
    console.log(`5 * ${numero} = ${numero*5}`);
    console.log(`6 * ${numero} = ${numero*6}`);
    console.log(`7 * ${numero} = ${numero*7}`);
    console.log(`8 * ${numero} = ${numero*8}`);
    console.log(`9 * ${numero} = ${numero*9}`);
    console.log(`10 * ${numero} = ${numero*10}`);
}

teste = tabuada(12);
console.log(teste)