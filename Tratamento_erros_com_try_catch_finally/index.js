//  Exemplo de estrutura Try Catch e Finally, para tratamento de execessões .   

let erroEncontrado = null;

try {

    let obj = undefined;
    console.log(obj);
    console.log(obj.propriedade);
    console.log('Ola mundo');
    erroEncontrado = false;

}catch(erro) {
 
    console.log('[Erro]');
    console.log(erro);
    erroEncontrado = true;

}finally {

    erroEncontrado = null;
    console.log('finalizar software');

}

console.log(erroEncontrado);


//  Exemplo de estrutura Try Catch e Finally, para tratamento de execessões .

let i = 0;

while(i < 3) {

    try {

        console.log('Iniciando calculadora')
        let input = 0;
        if(input === 0) {
    
            throw 'Valor negado';

        }
        let res = 5 / input;

    }catch(e) {
        
        i++;

    }finally {

        console.log('Finalizando calculadora\n');

    }

}


