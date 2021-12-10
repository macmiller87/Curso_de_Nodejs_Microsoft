// objeto chamado:  livro -> Book.

const book = {

    title: "Eloquent Javascript",
    author: "Marijn Haverbeke",
    isAvailable: true
  
};
  

// Json stringify
  
const bookToJson =  JSON.stringify(book); // Aqui está sendo setado na variavel o objeto acima, e usando o JSON.stringify() para transformar o objeto em json.
console.log(bookToJson);

const jsonObjt = '{"title":"Eloquent Javascript","author":"Marijn Haverbeke","isAvailable":true}';
const books = JSON.parse(jsonObjt); // Aqui está sendo transformado para objeto novamente.
console.log(books); // Aqui está sendo setado o objeto inteiro.
console.log(books.title); // Aqui está sendo setado apenas o title do objeto, e sendo imprimido no terminal