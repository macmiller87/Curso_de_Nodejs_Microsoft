// Number
let idade = 34;
console.log(idade);


// float
let percoMouse = 19.99;
console.log(percoMouse);


// String
let nome = "Glaucia";
console.log(nome);


// Boolean
let nomeVerdadeiro = true;
console.log(nomeVerdadeiro);

let nomeFalso = false;
console.log(nomeFalso);


// Date
let dateHoje = new Date();
console.log(dateHoje);


// Function
let resultado = adicionarNumeros(8, 6);

function adicionarNumeros(num1, num2) {

    return num1 + num2;
}

console.log(resultado);


// Array
let frutas = ["Bnana", "Morango", "Abacaxi"];
console.log(frutas);


// Object
const pessoa = {

    nome: "Glaucia",
    sobrenome: "Lemos",
    idade: 30
};

console.log(pessoa);


// NaN (é number)
let num = NaN;
console.log(typeof num); // Number
console.log(Number == NaN); // falso
console.log(num === NaN); // Number


// Null
let variavelQualquer = null;
console.log(variavelQualquer);


// Undefined
let carro;
carro = undefined;
console.log(carro);


//typeof
console.log(typeof 1);
console.log(typeof 'glaucia Lemos');


// instaceof
class Carro {};
let carro = new Carro();
console.log(carro instanceof Carro);


// Igualdade de escrita
console.log(20 === 20) // Comparando valor e tippo por isso
console.log('20' === 20);


// Igualdade solta
console.log(20 == 20) // compara valores
console.log('1' == 1);






