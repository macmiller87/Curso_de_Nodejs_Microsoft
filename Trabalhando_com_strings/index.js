let str1 = "Olá ";
let str2 = "Mundo !";

let str3 = str1 + str2;

console.log(str3);


let str4 = "0";
let num1 = 1;
let num2 = 2;
let num3 = 3;

console.log(str4.concat(num1, num2, num3));  // Método concat, para concatenar strings, imdependente de como foi atribuido o valor a variavel, não vai somar, e sim concatenar.

console.log(num1.concat(num2, num3)); // Neste caso teremos um erro, pois o método concat, não concatena números com strings, e sim strings com números.