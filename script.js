let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const numPalpite = document.getElementById('palpite');
const btnTentar = document.getElementById('btn');
const btnReiniciar = document.getElementById('btn-reiniciar');
const mensagem = document.getElementById('mensagem');
const cxTentativas = document.getElementById('tentativas');

btnTentar.addEventListener("click", function(){
    let valor = Number(numPalpite.value);

    if(valor < 1 || valor > 100){
        mensagem.textContent = "Por favor, digite um número entre 1 e 100.";
        return;
    }
    tentativas++;

    if(valor === numeroSecreto){
        mensagem.textContent = "Parabéns! Você acertou 😁🎉🎉🎉"
        } else if(valor < numeroSecreto){
            mensagem.textContent = "Tente um número maior! ⬆️";
        }else{
            mensagem.textContent = "Tente um número menor! ⬇️";
        }

        cxTentativas.textContent = "Tentativas: " + tentativas;
        numPalpite.value = "";
});

numPalpite.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        btnTentar.click();
    }
});

btnReiniciar.addEventListener("click", function(){
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;

    mensagem.textContent = "";
    cxTentativas.textContent = "Tentativas: 0";
    numPalpite.value = "";
});