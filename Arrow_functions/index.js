// Exemplo de Arrow function com return.

const func = (a, b) => {

    let somar = a + b;
    return somar;
  
}

console.log(func(10, 20));


// Exemplo de Arrow function sem return e sem {} chave, seu retorno é implícito.

const func2 = (a, b) => a + b;

console.log(func2(10, 20));