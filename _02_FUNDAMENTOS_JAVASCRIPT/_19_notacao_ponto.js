// A notação .(ponto) é utilizada de varias formas

//Nesse exemplo você acessa uma propriedade de um objeto ou um metodo
console.log(Math.PI);

// Aqui você usa a notação ponto para criar uma propriedade dentro de um objeto
const obj = {};
obj.nome = "Fabiano ALves";
obj.quantidade = 12;

//
function Obj2(nome){
    this.nome = nome;
    this.ola = function(){
        console.log("Deu certo ....");
    }
}

const n1 = new Obj2("Teste1");
const n2 = new Obj2("Teste2");

console.log(obj.nome);
console.log(n1.nome);
n1.ola();
console.log(n2.nome);
