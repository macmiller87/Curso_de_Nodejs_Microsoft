// Exemplo com IF/ELSE

const states = 400;

if (states === 200) {

  console.log("OK!");

}else if (states === 400) {

  console.log("Error!");

}else {

  console.log("Unknown status");

}


// Exemplo com Switch

const status = 500;

switch (states) {
  case 200:

    console.log("OK!");
    break;
    
  case 400: // or

  case 500: // or

    console.log("Error!");
    break;

  default:
    // else
    console.log("Unknown status");
    break;

}


// Exemplo com if ternário

const states = 200;
const message = states === 200 ? "OK!" : "Error!";
console.log(message);


// Exemplo operador de igualdade ===, sem as chaves no  IF/ELSE


const states = 400;

if (states === 200) console.log("OK!");
else if (states === 400) console.log("Error!");
else console.log("Unknown status");


// Exemplo de negação

const nome = "";

if (nome) {

  console.log("We have a name!");

}else {

  console.log("No name provided");

}


// Exemplo de case sensitive

const states = "error";

if(states.toUpperCase() === "ERROR") {

  console.log("Something went wrong!");

} else {

  console.log("Looks great!!");

}


// Exemplo usando operador logico OR/ ||

const status = 500;

if (states === 200) {

  console.log("OK!");

}else if(states === 400 || states === 500) {

  console.log("Error!");

} else {

  console.log("Unknown status");
  
}