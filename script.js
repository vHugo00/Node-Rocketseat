const prompt = require('prompt-sync')();

function validarOperacao(operacao) {
  return ["+", "-", "*", "/", "%"].includes(operacao);
}

function calculadora() {
  console.log("Bem-vindo à calculadora!");

  let continuar = true;

  while (continuar) {
    let operacao = prompt("Escolha uma operação: adição (+), subtração (-), multiplicação (*), divisão (/), porcentagem (%): ");

    if (!validarOperacao(operacao)) {
      console.log("Operação inválida. Tente novamente.");
      continue;
    }

    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Entrada inválida. Por favor, insira números válidos.");
      continue;
    }

    let resultado;
    switch (operacao) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          console.log("Divisão por zero não é permitida. Tente novamente.");
          continue;
        }
        resultado = num1 / num2;
        break;
      case "%":
        resultado = (num1 * num2) / 100;
        break;
    }

    console.log(`O resultado da operação é: ${resultado}`);

    let resposta = prompt("Deseja realizar outra operação? (Sim/Não): ").toLowerCase();
    continuar = (resposta === 'sim');
  }

  console.log("Obrigado por usar a calculadora!");
}

calculadora();
