/*--------------Exercicios de interpretação de código--------------

1. 10

2. 
a. 
19
21
23
25
27
30
 2. a.
 b.
let indice = 0
 const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
 for (let numero of lista) {

   if (numero > 18) {
 		console.log(numero, "indice", indice)
 	}

---------------Exercicios de implementação  de código-------------

1. 
 const bichinhos = Number(prompt("quantos bichinhos de estimação você tem?"));
 console.log(bichinhos);

a.
 if(bichinhos === 0) 
 { console.log("Que pena! Você pode adotar um pet!")}

b.
if(bichinhos > 0){
   let arrayBichinhos = []
   for(let i = 0; i < bichinhos; i++){

     arrayBichinhos.push(prompt("diga o nome do seu bichinho"))
  }
  console.log(arrayBichinhos)
 }

2. a.
 const arrayOriginal =  [5, 22, 98, 121, 10]

 function imprimirValorDoArrayOriginal (arrayOriginal) {
   for(let valor of arrayOriginal){
     console.log(valor)
   }
 }
 imprimirValorDoArrayOriginal(arrayOriginal)

b.
 function imprimirValorDoArrayOriginal (arrayOriginal) {
   for(let valor of arrayOriginal){
     console.log(valor/10)
   }
 }
 imprimirValorDoArrayOriginal(arrayOriginal)

c) 

d.

function imprimirArrayDeStrings (arrayOriginal){
   let arrayDeStrings = []
   let i = 0
   for(let valor of arrayOriginal){
     arrayDeStrings.push(`O elemento do índex ${i} é: ${valor}`)
     i++
   }
   console.log(arrayDeStrings)
 }
 imprimirArrayDeStrings (arrayOriginal)

