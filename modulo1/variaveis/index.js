let a = 10
let b = 10

console.log(b)//10

b = 5
console.log(a, b)//10 5

let a = 10
let b = 20
c = a // c = 10
b = c // b = 10
a = b //a = 10

console.log(a, b, c) // 10, 10, 10

let p = prompt("Quantas horas você trabalha por dia?")//let horasTrabalhadas
let t = prompt("Quanto você recebe por dia?")//let valorRecebido
alert(`Voce recebe ${t/p} por hora`)//voce recebe ${valorRecebido/horasTrabalhadas} por dia

let nome;
let idade; 

console.log(typeof nome);
console.log(typeof idade);

 /*  foi impresso object object undefined
 devido ao valor ainda não ter sido atribuído*/

const nome = prompt("Qual é o seu nome?")
const idade = prompt("Qual é a sua idade?")

//As variáveis nome e idade são do tipo string e number

console.log ("Olá", nome, "Você tem", idade, "anos");

let comoVai = prompt ("como você está hoje?");
let batom = prompt ("você gosta de batom vermelho?")
let corDoCabelo = ("qual a cor do seu cabelo?")

console.log(comoVai)
console.log(batom)
console.log(corDoCabelo)

let a = 10
let b = 25

novaVariavel = a;
a = b
b = novaVariavel;

console.log ("O novo valor de 'a' é", a);
console.log ("O novo valor de 'b' é", b);
 







