const visor = document.getElementById("visor");

function adicionar(valor) {
    visor.value += valor;
}

function calcular() {
    visor.value = eval(visor.value);
}

function limpar() {
    visor.value = "";
}