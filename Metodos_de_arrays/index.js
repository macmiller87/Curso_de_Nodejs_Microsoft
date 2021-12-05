// Exemplo de uso das funções push() e pop() em arrays.

const array1 = ['A', true, '2'];

console.log(array1.push('novo')); // Função push() adiciona um novo valor no final do array.
console.log(array1);
console.log(array1.pop()); // Função pop() remove o último valor do array.
console.log(array1);


// Exemplo de uso das funçoes shift() e unshift() em arrays.

const array2 = ['B', false, '4'];

console.log(array2.unshift('novo')); // Funçao unshift() adiciona um valor no começo do array/ou primerio índice.
console.log(array2);
console.log(array2.shift()); // Funçao shift() remove um valor no começo do array/ou primerio índice. 
console.log(array2);


// Exemplo de uso da função concat() wm arrays.

const array3 = ['C', true, '88'];
const array4 = ['D', false, '30'];

let newArray = array3.concat(array4); // Funçaõ concat() concatena dois ou mais arrays/torna um array só.
let newArray2 = array4.concat([1, 2, 3]); // Funçaõ concat() concatena dois ou mais arrays/torna um array só.

console.log(newArray);
console.log(newArray2);

