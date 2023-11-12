const livros = require('./listaLivros');

function menorValor(array, initialIndex) {

    let maisBarato = initialIndex;

    for (let atual = initialIndex; atual < array.length; atual++) {

        if(array[atual].valor < array[maisBarato].valor){

            maisBarato = atual;     //Verifica o array e encontra o menor valor

        };

    };
    return maisBarato;

};

module.exports = menorValor;