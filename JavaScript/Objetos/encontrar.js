const clientes = require('./clientes.json');

function encontrar(lista, chave, valor){

    return lista.find((item) => item[chave].includes(valor));

};

const encontrado = encontrar(clientes, 'nome', 'Amye');

console.log(encontrado);