const nomes = ['Cynthia', 'Glaucia', 'Diego'];

const data = [

    { name: 'Diego', active: true },
    { name: 'Glaucia', active: true},
    { name: 'Cynthia', active: true}

];

// Exemplo usando o laço While 

let looping = 0;

while(looping < nomes.length) {

    const nome = nomes[looping];
    console.log(nome);
    looping++;
    
}


let looping2 = 0;

while(looping2 < data.length) {

    const value = data[looping2];
    console.log(value.active);
    looping2++;
    
}


// Exemplo usando o laço For

for(let looping3 = 0; looping3 < nomes.length3; looping3++) {

    const nome = nomes[looping3];
    console.log(nome);

}


for(let looping4 = 0; looping4 < data.length; looping4++) {

    const value = data[looping4];
    console.log(value.name);

}


// Exemplo usando o laço do While 


let looping5 = 0;

do {

    const nome = nomes[looping5];
    console.log(nome);
    looping5++;

}while(looping5 < nomes.length)


let looping6 = 0;

do {

    const value = data[looping6];
    console.log(value.name);
    looping6++;

}while(looping6 < nomes.length)


// Exemplo usando o laço For..OF


for(let looping7 of nomes) {

    console.log(looping7);

}

for(let looping8 of data) {

    console.log(looping8.name);

}


// Exemplo usando o laço For in

for(let looping9 in nomes) {

    const nome = nomes[looping9];
    console.log(nome);

}


for(let looping10 in data) {

    const value = data[looping10];
    console.log(value.name);

}




