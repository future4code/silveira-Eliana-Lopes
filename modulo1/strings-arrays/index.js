/*--------------------------- Exercícios de interpretação de código-------------------------------
1.
a.  undefined
b.  null
c.  11
d.  3
e.  Array(11)
f.  9

2.
SUBI NUM ÔNIBUS EM MIRROCOS, 27

------------------------------- Exercícios de Escrita de código -------------------------------------

1.
const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsuario = prompt("Qual o seu e-mail?")
const fraseConcat = 'O email ' + emailDoUsuario + ' foi cadastrado com sucesso. Seja bem-vinda(o),' + nomeDoUsuario + '!'
const fraseTemplateString = `O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario} !`

console.log(fraseConcat)
console.log(fraseTemplateString)

2.
a.
const comidasPreferidas = ['brigadeiro', 'coxinha', 'açaí','chocolate', 'bife']

console.log(comidasPreferidas)

b.
console.log(`Essas são as minhas comidas preferidas:`)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

c.

const comidaPreferida = prompt("Qual a sua comida preferida?")

comidasPreferidas[1] = comidaPreferida

console.log(comidasPreferidas)

3.
const listaDeTarefas = [ ]
const tarefa1 = prompt("Cite uma tarefa que você precisa realizar hoje:")
const tarefa2 = prompt("Cite outra tarefa que você precisa realizar hoje:")
const tarefa3 = prompt("Cite mais uma tarefas que você precisa realizar hoje:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let indiceDeTarefas = Number(prompt("Cite uma atividade que você já realizou hoje: 0, 1 ou 2"))
listaDeTarefas.splice(indiceDeTarefas, 1)

console.log(listaDeTarefas)