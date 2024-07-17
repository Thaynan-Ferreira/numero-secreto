//2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'

//3
function verificaClick() {
    console.log('O botão foi clicado');

}

//4
function alertaJS() {
    alert('Eu amo JS');
}

//5
function recebeCidade(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`visite ${cidade}, e lembrei de você!`);
}

//6
function soma() {
    let n1 = parseInt(prompt('Digite um número: '));
    let n2 = parseInt(prompt('Digete outro número: '));

    let soma = n1 + n2;

    alert(`A soma de ${n1} + ${n2} é = ${soma}`);
}
