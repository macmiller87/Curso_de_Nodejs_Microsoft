// Criando um objeto em javascript

const book = {

    title: "Eloquent Javascript",
    author: "Marijn Haverbeke",
    isAvailable: true,

    checkIn: function() {
        this.isAvailable = true;
    },

    checkOut: function() {
        this.isAvailable = false;
    }

};


// Uso do construtor: new

const book = new Object();

book.title = "1984",
book.author = "George Orwell";
book.isAvailable = false;