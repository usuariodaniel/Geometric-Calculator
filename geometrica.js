function calcularAreaTriangulo() {
  const base = prompt("Informe a base do triangulo:");
  const altura = prompt("Informe a altura do triangulo:");
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = prompt("Informe a base do Retangulo:");
  const altura = prompt("Informe a altura do Retangulo:");
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = prompt("Informe o lado do quadrado:");
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapezio:"));
  const baseMenor = parseFloat(prompt("Informe a base menor do trapezio:"));
  const altura = prompt("Informe a altura do trapezio:");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = prompt("Informe o raio do circulo");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular área do triangulo\n" +
      "2. Calcular área do retangulo\n" +
      "3. Calcular área do quadrado\n" +
      "4. Calcular área do trapézio\n" +
      "5. Calcular área do círculo\n" +
      "6. Sair"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Opção Inválida");
    }

    if (resultado) {
      alert("O Resultado é " + resultado);
    }
  } while (opcao !== "6");
}

executar();
