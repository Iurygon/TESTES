//DIFERENTE DOS TIPOS PRIMITIVOS, OS OBJETOS NÃO PERMITEM CÓPIAS FEITAS ATRAVÉS DE ATRIBUIÇÕES DE OUTROS OBJETOS. VEJA:

const cliente1 = {

    nome: 'João',
    idade: 30,
    cabelo: 'Loiro',

};

const cliente2 = cliente1;

cliente2.cabelo = 'Preto';

//console.log(cliente2);

//ISSO OCORRE PORQUE É CRIADO UM ESPAÇO NA MEMÓRIA PARA O OBJETO E, AO TENTAR FAZER ESSA ATRIBUIÇÃO, ESTA APENAS FAZENDO UM NOVO DIRECIONAMENTO PARA AQUELE MEMSMO ESPAÇO
//PORÉM, É POSSÍVEL FAZER UMA CÓPIA DE UM OBJETO COM O MÉTODO Object.create(), QUE CRIA UM NOVO OBJETO COM BASE NO PROTÓTIPO PASSADO

const cliente3 = Object.create(cliente1);

cliente3.nome = 'Desmond Benjamin';

console.log(cliente3);