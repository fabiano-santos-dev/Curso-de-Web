/**
   Para entender o conceito de null e undefined, é preciso entender 
   sobre variaveis por valor e por referencia.
 */

/*
  Note que quando eu trabalho com tipos primitivos e feito uma cópia 
  da variavel exemplo
 */
let num1 = 12;
let num2 = num1;
num2++;
console.log(num1);
console.log(num2);

/**
   Agora quando não trabalhamos com valor primitivo, estamos trabalhando por referencia
   ou seja a variavel aponta para um endereço de memoria.
   Exemplo
 */
const a = {
    nome: "Fabiano Alves"
}
console.log(a)// Valor de a antes
const b = a;

b.nome = "Maria josé";
console.log(a)// valor de a depois

/*
 Sobre o undefined,Significa que você declarou uma variável porem 
 essa variável não foi inicializada
 */
let teste; // Não inicializada
console.log(teste);

/*
 É diferente de você tentar utilizar uma variável que não foi nem declarada
 Variável não declarada, vai gerar o erro (ReferenceError: c is not defined)
 */
//console.log(c);

/*
  Ja null é uma variável que não aponta para nenhum endereço de memória
  ou seja ela esta vazia, isso é valido se você por exemplo quizer fazer com 
  que uma determinada variável não aponte mais para lugar nenhum, ai você atribui
  null a ela
*/
let d = null;
console.log(d);

let e = {
    idade:44
}

let f = e;
console.log("Variável e Antes",e);
console.log("Variavel f que apontava para e Antes",f);

f = null;
console.log("Variavel e antes",e);
console.log("Variavel f que apontava para e, e recebeu o valor null:Não aponta mais para o endereço de e:",f);

