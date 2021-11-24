// Exemplo de uso da variavel var //

/* function imprimirNome() {

    var nome = 'Joanzinho'; // Neste exemplo prova-se que no javascript a declaração da variavel como var, só pode ser usada dentro do escopo/bloco em que ela está sendo usada.

    console.log('Meu nome é ' + nome); // Aqui seria o local certo de chamar //

}

console.log('Meu nome é ' + nome); // chamando aqui vai gerar o erro //

imprimirNome(); */


// Exemplo de uso da variavel let //

/* function imprimirIdade() {

    for(let idade = 34; idade < 50; idade += 1) {

       console.log('Idade dentro do for ...' + idade); // Aqui seria o local certo de chamar //
    }

    console.log('Idade dentro do for ...' + idade); // O mesmo serve para a declaração da variavel let, ela também tem que ser utilizada dentro de um bloco/escopo, geralmente utlizadas para loopings se não vai dar erro.
}

imprimirIdade(); */


// Exemplo de uso da variavel const //

/* function imprimirIdade2() {

    for(const idade = 34; idade < 50; idade += 1) {

       // console.log('Idade dentro do for ...', idade); // Neste exemplo prova-se que a variavel quando declarada como const, não pode variar o seu valor, ou seja seu valor não muda, aqui vai ocasionar o erro.
    }
}

imprimirIdade2(); */

const pessoa = { // Aqui neste exemplo prova-se que quando a variavel é declarada como const, ela pode ser usada fora do escopo que não vai gerar problema, desde que ela não altere seu valor.

    nome: 'Joãozinho',
    idade: 34
}

function imprimirDadosPessoa() {

    console.log(`Nome ....: ${pessoa.nome} e a idade é ....: ${pessoa.idade} `);
}

imprimirDadosPessoa();
