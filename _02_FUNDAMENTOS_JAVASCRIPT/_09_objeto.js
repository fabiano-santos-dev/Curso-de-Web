/**
 *  Um objeto é um conjunto de par de chave:valor,ele tem formas de ser iniciado 
 */

// Aqui é um exemplo de um objeto vazio, que você vai inserindo dados nele com o tempo.
const cliente = {};
cliente.nome = "Fabiano Alves";
cliente.email = "fasnaweb2020@gmail.com";
cliente['idade'] = 44;
console.log(cliente);

// Outra forma de criar obejtos e ja inserindo seus dados dentro dele.
const cliente2 ={
    nome:"Tatiano Alves",
    email:"tas@gmail.com",
    idade:47
}
console.log(cliente2);

// Sobre JSON, ele não é um objeto e sim um modelo de texto serve para imperobilidade,
// Trocar dados entre sistemas
'{"nome":"Tatiano Alves","email":"tas@gmail.com","idade":47}'