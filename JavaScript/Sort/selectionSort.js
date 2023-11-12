const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for(let atual = 0; atual < livros.length; atual++){

    let menor = menorValor(livros, atual);  //Encontra o índice com o menor valor da lista
    let livroAtual = livros[atual];         //Define qual é o livro em que se inicia a verificação

    console.log('Atual:', livroAtual);

    let livroMaisBarato = livros[menor];    //Define qual o livro mais barato

    console.log('Mais barato', livroMaisBarato);

    livros[atual] = livroMaisBarato;        //Aqui, é feita a troca do livro inicial pelo livro mais barato no array de objetos listaLivros, posicionando o mais barato no começo do array
    livros[menor] = livroAtual;
    
    console.log(livros);

};
//Quando há o incremento na repetição, a posição inicial já está definida como sendo o mais barato e não participa mais da verificação.

console.log(livros);