// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');

        let palavaraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavaraTentativa}`;

        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'Número secreto é maior');
        }

        tentativas++;

        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// Desafio 1
// function exibirOlaMundo() {
//     console.log("Olá, mundo!");
// }
// exibirOlaMundo();

// function exibirOlaNome(nome) {
//     console.log(`Olá, ${nome}!`);
// }
// exibirOlaNome("Alice");

// function dobrarNumero(numero) {
//     return numero * 2;
// }
// const numeroDobrado = dobrarNumero(5);
// console.log(`O dobro de 5 é ${numeroDobrado}.`);

// function calcularMedia(a, b, c) {
//     return (a + b + c) / 3;
// }
// const media = calcularMedia(10, 15, 20);
// console.log(`A média dos números é ${media}.`);

// function maiorNumero(a, b) {
//     return a > b ? a : b;
// }
// const maior = maiorNumero(8, 12);
// console.log(`O maior número é ${maior}.`);

// function multiplicarPorSiMesmo(numero) {
//     return numero * numero;
// }
// const resultado = multiplicarPorSiMesmo(4);
// console.log(`4 multiplicado por si mesmo é ${resultado}.`);

// Desafio 2
// function IMC(alt, pes) {
//     return pes / (alt * alt);
// }

// function fat(num) {
//     let fat;

//     while (num > 0) {
//         fat *= num;
//         num--;
//     }

//     return fat;
// }

// function dolarToReal(dolar) {
//     return dolar * 4.80;
// }

// function areaPeri(alt, lar) {
//     alert(`Area: ${alt * lar}, Perimetro: ${alt + alt + lar + lar}`);
// }

// function areaPeriCirc(raio) {
//     alert(`Area: ${Math.PI * (raio * raio)}, Perimetro: ${2 * Math.PI * raio}`)
// }

// function tabuada(num) {
//     let message = '';

//     for (i = 1; i < 11; i++) {
//         message += `\n${num} * ${i} = ${num * i}`;
//     }

//     alert(message);
// }

// Desafio 3
// let listaGenerica = [];

// let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];

// linguagensDeProgramacao.push('Java','Ruby','GoLang');

// let nomes = ['Pedro', 'Daniela', 'Diogo'];
// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[nomes.length - 1]);