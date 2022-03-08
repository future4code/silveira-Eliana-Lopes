/*----------------Exercícios de interpretação de código--------------------------
1.
a. O programa verifica se os números são pares
b. Pares
c. Impares
2.
a. Para informar os preços das frutas
b. O preço da fruta Maçã é R$ 2.25

3.
a. 
b. Se o número for 10: "Esse número passou no teste" e um erro.
Se for -10, imprime apenas o erro
c. Haverá um erro.

------------------------------Exercícios de escrita de código-------------------

1. a.const idade = (prompt("Qual é sua idade?"));
b. const idade = Number(prompt("Qual é sua idade?"));
 c. if (idade >= 18) {
   console.log("Você pode dirigir.");
 } else {
   console.log("Você não pode dirigir.");
 }

2. const turno = prompt("Digite seu turno: M (matutino) ou V (Vespertino) ou N (Noturno)")

 if (turno === "M"){
   console.log("Bom dia!")
 } else if (turno === "V"){
   console.log("Boa tarde!")
 } else (turno === "N"){
   console.log("Boa noite!")

3. const turno = prompt("Digite seu turno: M (matutino) ou V (Vespertino) ou N (Noturno)"
 );

switch (turno) {
   case "M":
     console.log("Bom dia!");
     break;
   case "V":
     console.log("Boa tarde!");
     break;
   case "N":
     console.log("Boa noite!");
     break;
   default:
    console.log("Erro");
     break;
 }

 4.
 const genero = prompt("Qual o gênero do filme que vão assistir?");
 const valor = prompt("Qual o preço do ingresso?");

 if (genero === "fantasia" && valor <= 15) {
  console.log("Bom filme!");
 } else {
   console.log("Escolha outro filme :(");
 }
