//É POSSÍVEL FAZER UMA LISTA DE OBJETOS

const cliente = {

    nome: 'Desmond Benjamin',
    idade: '63',
    telefone: 3799999990,
    email: 'desmond@benjamin.com',
    endereco: [
        {

        rua: 'Antenor Chaves Madeiro',
        numero: 1337,
        bairro: 'Belvedero',
        apartamento: false,

        },
        {

        rua: 'Iguita da Bagunça',
        numero: 594,
        bairro: 'Itambe',
        apartamento: true,

        },
        {

        rua: 'Los Polos Hermanos',
        numero: 88,
        bairro: 'Skyler',
        apartamento: 'false',

        }

    ],
    
};

cliente.endereco.push({
    
    rua: 'Highway of Hell',
    numero: 333,
    bairro: 'Scribles',
    apartamento: true,

});

const apartamentos = cliente.endereco.filter( (local) => local.apartamento === true);

console.log(apartamentos);