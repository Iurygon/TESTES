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

for(let chave in cliente){

    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo !== 'function'){

        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`); 
        //Quando chega na última chave do objeto, temos um retorno 'object Object'. Isso é uma característica no JavaScript e, para evitar esse tipo de coisa, podemos fazer um filtro não mostre isso, que é o que foi feito quando declaramos o tipo do parâmetro do objeto e fizemos uma comparação.

    };

};
