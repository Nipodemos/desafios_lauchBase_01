// Cálculo de IMC
//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

console.log("Cálculo de IMC:");

const nome = "Alan"
const peso = 120
const altura = 1.88

const calculoIMC = peso / (altura * altura)

console.log(`O nome do(a) paciente é ${nome}, o peso dele(a) é ${peso}kg e sua altura é ${altura}m`);

if (calculoIMC >= 30) {
  console.log(`${nome} você está acima do peso.`);
} else {
  console.log(`${nome} você não está acima do peso.`);
}

console.log("\n");

// Cálculo de aposentadoria
// Crie um programa para calcular a aposentadoria de uma pessoa.

console.log("Cálculo de aposentadoria");

const nomeDaPessoa = "Silvana";
const sexo = "F";
const idade = 60;
const tempoDeContibuicao = 30;

console.log(`o nome da pessoa é ${nomeDaPessoa}, o sexo é ${sexo}, ela tem ${idade} anos e contribuiu por ${tempoDeContibuicao} anos`);
// Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

// - O tempo de contribuição mínimo para **homens** é de **35 anos** e, para **mulheres**, **30 anos**;
// - Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do **homem** precisa ser de no mínimo 95 anos, enquanto a **mulher** precisa ter no mínimo 85 anos na soma;

// Com base nas regras acima imprima na tela as mensagens:

// - `SE` a pessoa estiver aposentada: `Silvana, você pode se aposentar!`;
// - `SE` a pessoa NÃO estiver aposentada: `Silvana, você ainda não pode se aposentar!`;

if (sexo == "F") {
  if (idade + tempoDeContibuicao >= 85) {
    console.log(`${nomeDaPessoa}, você já pode se aposentar!`);
  } else {
    console.log(`${nomeDaPessoa}, não ainda não pode se aposentar...`);
  }
} else {
  if (idade + tempoDeContibuicao >= 95) {
    console.log(`${nomeDaPessoa}, você já pode se aposentar!`);
  } else {
    console.log(`${nomeDaPessoa}, não ainda não pode se aposentar...`);
  }
}