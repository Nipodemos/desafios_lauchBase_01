// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro
// de um objeto chamado empresa.

// Nome: Rocketseat

// Cor: Roxo

// Foco: Programação

// Endereço:

// Rua: Rua Guilherme Gembala
// Número: 260
console.log("Exercício Construção e impressão de objetos");
const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereço: {
    rua: "Guilherme Gembala",
    numero: 260
  }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`);

console.log("\n");
console.log("Exercício Vetores e objetos");

const programador = {
  nome: "Alan",
  idade: 25,
  tecnologias: [
    { nome: "Javascript", especialidade: "Web/Mobile" },
    { nome: "Flutter", especialidade: "Mobile" },
    { nome: "Perl", especialidade: "manipulação de arquivos" }
  ]
}

console.log(
  `O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`
);