const livros = require('./listaLivros');

let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++) {

    if(livros[atual].valor > livros[maisCaro].valor){

        maisCaro = atual;

    };

};

console.log(`O livro mais caro é ${livros[maisCaro].titulo} e o seu valor é ${livros[maisCaro].valor}`);
console.log(livros);