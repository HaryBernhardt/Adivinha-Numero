let numeroSecreto = geradorDeNumero();
let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
let tentativas = 1;
let reiniciar = document.getElementById('reiniciar');

function exibirTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo de Adivinhação');
exibirTexto('p', 'Escolha um número de 1 a 10');

function verificarChute() {
    chute = document.querySelector('input').value;
    if (chute == numeroSecreto && tentativas > 1) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTexto('h1', `Parabéns! Você acertou em ${tentativas} ${palavraTentativa}`);
        exibirTexto('p', 'Clique em "Novo Jogo" para jogar novamente');
        reiniciar.removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTexto('h1', 'Errou!');
        exibirTexto('p', 'O número secreto é menor');
    } else {
        exibirTexto('h1', 'Errou!');
        exibirTexto('p', 'O número secreto é maior');
    }
    tentativas++;
    limpaCampo();
}

function geradorDeNumero() {
    return parseInt(Math.random() * 10 + 1);
}

function limpaCampo () {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = geradorDeNumero();
    tentativas = 1;
    exibirTexto('h1', 'Jogo de Adivinhação');
    exibirTexto('p', 'Escolha um número de 1 a 10');
    reiniciar.setAttribute('disabled', true);
}