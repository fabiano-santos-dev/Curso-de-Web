let numero = 1;

{
    let numero = 2; // Procura o escopo menor
    console.log("Dentro = ",numero);
}
console.log("Fora =",numero);