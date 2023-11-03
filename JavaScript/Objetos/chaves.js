//Uma outra forma de encontrar as chaves de um objeto é através do método keys.

const cliente = {

    nome: 'João',
    idade: 25,
    cidade: 'Salvador',
    estado: 'Bahia',

};

cliente.endereco = {

    rua: 'Alameda dos Bem Te Vis',
    bairro: 'Belvedere',
    numero: 3687,

};

const listaDeChaves = Object.keys(cliente);

//retorna uma lista com as chaves do objeto passado no parâmetro.

console.log(listaDeChaves);