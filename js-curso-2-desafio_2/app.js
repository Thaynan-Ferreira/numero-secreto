// 1 - função que diga ola mundo no console
function olaMundo(){
    console.log("Olá Mundo!");

}

//2 - Função que recebe um nome e retorna o nome no console
function recebeNome(nome){
    console.log(`Olá, ${nome}`);
}

//3 - Função que recebe um numero e retorna o dobro dele
function retornaDobro(num){
    return num*2
}

//4 - Função que recebe 3 numero por parametro e deolve a media
function calculaMedia(n1, n2, n3) {
    return (n1 + n2 + n3)/ 3;

}

// 5 - recebe 2 numero e retorna o maior entre eles
function maiorMenor(n1, n2){
    if(n1 > n2){
        return n1;
    }
    else if (n1 < n2){
        return n2;
    }

}

// 6 - recebe um numero e eleva ele ao quadrado
function quadrado(n1) {
    return n1 * n1;
}












//chamada das funções
olaMundo();

let nome = prompt("Digite seu nome:"); // recebe o nome pra passar o parametro
recebeNome(nome);

//recebe o valor e e return do terceiro desafio
let n = parseInt(prompt("Digite um numero"));
let dobro = retornaDobro(n);
console.log(dobro);

//recebe os valores e os returns do quarto desafio
let n1_4 = parseInt(prompt("Digite um numero"));
let n2_4 = parseInt(prompt("Digite um numero"));
let n3_4 = parseInt(prompt("Digite um numero"));

let media = calculaMedia(n1_4, n2_4, n3_4);
console.log(media);

//recebe os valores e os returns do quinto desafio
let n1_5 = parseInt(prompt("Digite um numero"));
let n2_5 = parseInt(prompt("Digite um numero"));

let maior = maiorMenor(n1_5, n2_5);
console.log(`O maior numero entre ${n1_5} e ${n2_5} é = ${maior}`);

//recebe o valor e o return do sexto desafio
let n1_6 = parseInt(prompt("Digite um numero"));
let elevQuadrado = quadrado(n1_6);
console.log(`${n1_6} * ${n1_6} = ${elevQuadrado}`);