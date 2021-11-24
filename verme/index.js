//função da primeira fase
function escolhas(numero) {
  if (numero == 1) {
    window.location.assign("./p1fase1opcao1.html");
  } else if (numero == 2) {
    window.location.assign("./p1fase1opcao2.html");
  }
};

function escolhaOpcao() {
  var numeroEscolha = prompt("Digite sua opção: 1 ou 2");
  return escolhas(numeroEscolha);
};

//funções da segunda fase - escolhas2&escolhaOpcao2faseopcao1 vem da escolha número 1 na primeira fase -- 
// escolhas22&escolhaOpcao2faseopcao2 vem da escolha número 2 da segunda fase
function escolhas2(numero) {
  if (numero == 1) {
    window.location.assign("./p1fase2opcao11.html");
  } else if (numero == 2) {
    window.location.assign("./p1fase2opcao12.html");
  }
};

function escolhaOpcao2faseopcao1() {
  var numeroEscolha2 = prompt("Digite sua opção: 1 ou 2");
  return escolhas2(numeroEscolha2);
};

function escolhas22(numero) {
  if (numero == 1) {
    window.location.assign("./p1fase2opcao21.html");
  } else if (numero == 2) {
    window.location.assign("./p1fase2opcao22.html");
  }
};

function escolhaOpcao2faseopcao2() {
  var numeroEscolha22 = prompt("Digite sua opção: 1 ou 2");
  return escolhas22(numeroEscolha22);
};

//funções da terceira fase
function escolhas3(numero) {
  if (numero == 1) {
    window.location.assign("../gameover.html");
  } else if (numero == 2) {
    window.location.assign("../vitoria.html");
  }
};

function escolhaOpcao3faseopcao1() {
  var numeroEscolha3 = prompt("Digite sua opção: 1 ou 2");
  return escolhas3(numeroEscolha3);
};

function escolhasReverso(numero) {
  if (numero == 1) {
    window.location.assign("../vitoria.html");
  } else if (numero == 2) {
    window.location.assign("../gameover.html");
  }
};

function escolhaOpcao3faseopcao2() {
  var numeroEscolha3 = prompt("Digite sua opção: 1 ou 2");
  return escolhasReverso(numeroEscolha3);
};