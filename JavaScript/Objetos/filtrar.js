const clientes = require('./clientes.json');

function filtraApartementoSemComplemento(cliente){

    return clientes.filter( (cliente) => {

        return cliente.endereco.apartamento &&
        !cliente.endereco.hasOwnProperty('complemento')

    });

};

const filtrados = filtraApartementoSemComplemento(clientes);

console.log(filtrados);