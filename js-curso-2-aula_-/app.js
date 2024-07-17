let listaDeNumerosSorteador = [];
let numeroLimite = 50;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

exibiMensagemInicial();

//exemplo de função com passagem de parametro sem retorno
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    limparCampo();
}

function exibiMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 50')
}
;

//exemplo de função sem passagem de parametro sem retorno
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numSecreto);
    if(chute == numSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }
        else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
}

//Exemplo de função com Return
function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeDeElementosNaLista = listaDeNumerosSorteador.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteador = [];
    }

    if (listaDeNumerosSorteador.includes(numeroEscolhido)) {
        return gerarNumAleatorio();
    }
    else{
        listaDeNumerosSorteador.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNumAleatorio();
    limparCampo;
    tentativas = 1
    exibiMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}