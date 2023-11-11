const livros = require('./listaLivros');

function menorValor(array, initialIndex) {

    let maisBarato = initialIndex;

    for (let atual = initialIndex; atual < array.length; atual++) {

        if(array[atual].valor < array[maisBarato].valor){

            maisBarato = atual;

        };

    };
    return maisBarato;

};