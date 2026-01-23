/*
  Array é uma estrutura que pode armazenar varios valores.
  Em algumas linguagens como java que é tipada o array é constituido de apenas 
  o mesmo tipo de dado.Se for inteiro, somente contera numeros inteiros.
*/

// JavaScript porem aceita varios dados diferentes exemplo

const valores = [7.7,8.9,6.3,9.2];
console.log(valores[0],valores[3]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id:3},false,null,'teste');
console.log(valores);

console.log(valores.pop())
delete valores[0];
console.log(valores);

console.log(typeof valores);