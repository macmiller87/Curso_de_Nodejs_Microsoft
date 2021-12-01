// const horaAgora = new Date();
// console.log(horaAgora);


// const ahora = new Date(2017, 8, 3, 5, 34, 45); // A gente consegue controlar quais os parametros de dias, horas, minutos e segundos passando os parametros.
// // console.log(ahora);
// // console.log(new Date(2050, 6, 9,)); 

// ahora.setFullYear(2800); // É pegar modificar cad parametro da função Date() 
// ahora.setMonth(5);  // É pegar modificar cad parametro da função Date()
// ahora.setHours(8, 43); // É pegar modificar cad parametro da função Date()

// console.log(ahora);


const minhaData = new Date(); 
const mes = minhaData.getMonth(); // Pegando os valores e adcionando a variaveis para uma possível utilização.
const ano = minhaData.getFullYear(); // Pegando os valores e adcionando a variaveis para uma possível utilização.
const dia = minhaData.getDate(); // Pegando os valores e adcionando a variaveis para uma possível utilização.

console.log(dia, '/', mes, '/', ano);
