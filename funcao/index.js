// Exemplo de função 1

function raizQuadrada(numero) {

    return numero * numero;
    
}
  
console.log(raizQuadrada(6));


// Exemplo de função 2

function valorProdutoDesconto(preco, desconto) {

    let resultado = preco * desconto;
    console.log("Voce economizou ....: R$ " + resultado);
    return preco - desconto;
  
}
  
console.log(valorProdutoDesconto(50, 0.2));



// Exemplo de funçao 3

function conversorCelsiusParaFahrenheit(celsius) {

    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
  
}
  
console.log(conversorCelsiusParaFahrenheit(40));