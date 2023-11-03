const cliente = {

    nome: 'Desmond Benjamin',
    idade: '63',
    telefone: 3799999990,
    email: 'desmond@benjamin.com',
    
};

cliente.endereco = {

    rua: 'Antenor Chaves Madeiro',
    numero: 92,
    bairro: 'Belvedere',

};

//AMBAS AS FORMAS FUNCIONAM

const cliente = {

    nome: 'Desmond Benjamin',
    idade: '63',
    telefone: 3799999990,
    email: 'desmond@benjamin.com',
    endereco: {

        rua: 'Antenor Chaves Madeiro',
        numero: 92,
        bairro: 'Belvedere',

    },
    
};
console.log(cliente);