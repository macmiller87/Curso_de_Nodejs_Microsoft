// Criando array com dados

let array1 = ['Diego', 22, true];
console.log(array1);
console.log(array1.length); // Comprimento do array

// Array index

console.log(array1[2]);
console.log(Object.keys(array1));    // Acesa diretamente a chave do ojeto
console.log(Object.values(array1)); // Acesa diretamente o valor do ojeto


// Inserindo dados no array

let arrayLenght = 2;
let array2 = Array(arrayLenght);
let array3 = [];

array2[0] = 55;
array2[1] = true;

console.log(array2);

array3[0] = 55;
array3[1] = true;
array3[2] = "Macmiller Duarte";

console.log(array3);


// Inserindo dados no array criado já com dados

let array4 = ['Macmiller', 34, true];

array4.push(35, 'Duarte');
console.log(array4);


// Inserindo dados no array criado já com dados -> Spread Operator (ES6);

let array5 = ['A',  'B'];
let array6 = [...array5, 'C', 'D']; // Atribuindo os valores atrvés do spread operator.
console.log(array6);


// Concatendo arrays

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers]; // Passando dados ao array                                                                                                                                                                                                                       

// console.log(allNumbers); 

let data = ['Diego', 22, true];
let moreData = ["Macmiller", 35 , false];

data.push(...moreData)
console.log(data);