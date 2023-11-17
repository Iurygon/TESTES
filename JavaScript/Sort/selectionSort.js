// const livros = require('./listaLivros');
// const menorValor = require('./menorValor');

// for(let atual = 0; atual < livros.length; atual++){

//     let menor = menorValor(livros, atual);  //Encontra o índice com o menor valor da lista
//     let livroAtual = livros[atual];         //Define qual é o livro em que se inicia a verificação

//     console.log('Atual:', livroAtual);

//     let livroMaisBarato = livros[menor];    //Define qual o livro mais barato

//     console.log('Mais barato', livroMaisBarato);

//     livros[atual] = livroMaisBarato;        //Aqui, é feita a troca do livro inicial pelo livro mais barato no array de objetos listaLivros, posicionando o mais barato no começo do array
//     livros[menor] = livroAtual;
    
//     console.log(livros);

// };
// //Quando há o incremento na repetição, a posição inicial já está definida como sendo o mais barato e não participa mais da verificação.

// console.log(livros);

function selectionSort(array){

    for (let i = 0; i < array.length; i++){
        let minValue = 0;
        let actualElement = i;
        
        for (let j = i + 1; j < array.length; j++){
            if (j < actualElement){
                actualElement = j;
                j = actualElement;
            };
        };
    };
    return array;

};

console.log(selectionSort([5, 4, 10, 8]));