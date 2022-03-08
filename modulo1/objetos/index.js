/*------------------Exercícios de interpretação de código------------------------
1. a.
CavendishVirginia Cavendish
VM17:17 {canal: 'Globo', horario: '14h'}
2.
a. 
{nome: 'Juca', idade: 3, raca: 'SRD'}
VM21:12 {nome: 'Juba', idade: 3, raca: 'SRD'}
VM21:13 {nome: 'Jubo', idade: 3, raca: 'SRD'}
b.
A sintaxe três pontos antes do nome de um objeto faz uma cópia dele.
3.
a.
false
undefined
undefined 

b.
Quando o comando é executado a função recebe um objeto e o nome da propriedade 
que o objeto tem ou não tem e retorna o seu valor.

---------------------------------------------Exercícios de escrita de código-------------------------------
1.
a.
const pessoa = {
nome: "Amanda",
apelidos: ["Amandinha", "Mandinha", "Mandi"]
 };

function imprimePessoa(objeto) {
  console.log(
     `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
  );
 }

 imprimePessoa(pessoa);

 b.

const pessoa2 = {
    nome: "Amanda",
apelidos: ["Amada", "Manda", "Mandica"] 
 };

function imprimePessoa(objeto) {
  console.log(
     `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
  );
 }

 imprimePessoa(pessoa2)

 2.
a.

const pessoa = {
   nome: "Eliana",
  idade: 27,
  profissao: "Estudante"
 };

b.

Retorno: ["Eliana", 6, 27, "Estudante", 9]

function imprimeinformacoes(eu) {
   return [
     eu.nome,
     eu.nome.length,
     eu.idade,
     eu.profissao,
    eu.profissao.length
  ];
}

console.log(imprimeInformacoes(pessoa));

3.
a.
 const carrinho = [];

b
const melao = {
   nome: "melao",
   disponibilidade: true
 };

 const pera = {
  nome: "pera",
   disponibilidade: true
 };

 const uva = {
  nome: "uva",
   disponibilidade: true
 };

c.
 function carrinhoFeira(fruta) {
   carrinho.push(fruta);
 }

 carrinhoFeira(melao);
 carrinhoFeira(pera);
 carrinhoFeira(uva);

d.
console.log(carrinho);
