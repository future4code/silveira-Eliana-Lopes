/*-----------------------Exercícios de interpretação de código---------------------------
a. 10 e 50
b.Não aparece nada no console

2. a.
A função pede para inserir um texto e verifica se a palavra cenoura aparece no texto, 
se aparecer retorna true, se não aparecer retorna false
b.
i   - true
ii  - true
iii - true
----------------------------Exercícios de escrita de código------------------------------
1.
a.const nome = "Eliana"
const idade = 27
const cidade = "Montes Claros"
const estudante = "sou estudante"

function informacao() {
    	console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}`)
 }

informacao()

b.

 function dadosPessoais(nome, idade, cidade, profissao) {
 	return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
 }

const dados = dadosPessoais('Eliana', 27, 'Montes Claros', 'estudante')

console.log(dados)
console.log(dadosPessoais('Eliana', 27, 'Montes Claros', 'estudante'))

2.
a. */
function funcao1(num1, num2) {
    return num1 + num2 
}

const resultado = funcao1(15, 30)
console.log("resultado funçao 1", resultado)
 
//b.
 function maiorOuIgual(num1, num2) {
    return num1 >= num2
}

const primeiroNumero = maiorOuIgual(15,30)
console.log("resultado" , primeiroNumero)



//3.
//a.
function soma(num1, num2) {
	return num1 + num2
}

function subtracao(num1, num2) {
	return num1 - num2
}

function multiplicacao(num1, num2) {
	return num1 * num2
}

function divisao(num1, num2) {
    
	return num1 / num2
}



const num1 = Number(prompt("Insira um número"))
const num2 = Number(prompt("Insira outro número"))

console.log("Soma:", soma(num1, num2))
console.log("Diferença:", subtracao(num1, num2))
console.log("Multiplicação:", multiplicacao(num1, num2))
console.log("Divisão:", divisao(num1, num2))