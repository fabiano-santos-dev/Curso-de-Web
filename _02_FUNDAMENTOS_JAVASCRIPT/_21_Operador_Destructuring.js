// Novo recurso do ES2015
// O operador destructuring serve para você retirar de dentro de um objeto,
// valores de variaveis que você necessite utilizar. 
const pessoa = {
    nome:"Tatiana",
    idade:47,
    endereco:{
        rualogradouro:"Rua Ç",
        bairro:"Açude"
    }
}

const {nome,idade} = pessoa;
console.log(nome);
console.log(idade);

console.log();

const {nome:i,idade:h} = pessoa;
console.log(i);
console.log(h);