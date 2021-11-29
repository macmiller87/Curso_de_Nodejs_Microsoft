// Exemplo de conversões: Strings -> para inteiros: com a função parseInt() 

var numeroDecimal = parseInt("50");
console.log(numeroDecimal);
console.log(typeof numeroDecimal);

var hexadecimal = parseInt("0xF");
console.log(hexadecimal);

var alfabeto = parseInt("ABCDE");
console.log(alfabeto);


// Exemplo de conversões: Strings -> para Floats: com a função parseFolat()

var mouse = parseFloat("29.90");
console.log(mouse);
console.log(typeof mouse);

var uva = parseFloat("5.00");
console.log(uva);

var alfabeto2 = parseFloat("ABC");
console.log(alfabeto2);


// Exemplo de conversões: Números -> para Strings: com a função toString()

var num = 33;
var idade = num.toString();
console.log(idade);
console.log(typeof idade);


// Exemplo de conversões: Templates Literals

const funcionario = {

    nome: 'Chapolin',
    idade: 40,
    profissao: 'Software Engineer',
    salario: "10.000.00"
};


console.log(`O funcionario ${funcionario.nome} tem ${funcionario.idade} de idade, ele trabalha e ganha em torno de  R$ ${funcionario.salario} reais, sua profissão é ${funcionario.profissao} !`);







