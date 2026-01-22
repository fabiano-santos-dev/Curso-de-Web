// Valores divididos por 0 retorna tipo infinity
console.log(7 / 0);

// Quando se tem um valor inteiro do tipo string ,dividido po um inteiro 
// javaScript entende que é uma string, convert ela para um inteiro e faz o calculo
// Se fosse um valor tipo "10,2",ele não iria entender e gerar NAN.
console.log("10" / 2);
console.log("10,2" / 2);
console.log("fas" * 2); // NAN

// Aqui gera uma imprecisão
console.log(0.1 + 0.7);

// Você não consegue chamar a função direto no valor literal
// mais consegue se colocar os parenteses
//console.log(10.toString()) // Gera erro. 
console.log((10).toString());
