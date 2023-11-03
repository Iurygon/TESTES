//TAMBÉM É POSSÍVEL DEFINIR FUNÇÕES COMO INSTÂNCIAS DE UM OBJETO. EM POO, ISSO É O QUE CHAMAMOS DE MÉTODOS

const cliente = {

    nome: 'Desmond Benjamin',
    saldo: 500,
    efetuarPagamento: function (valor){

        if(valor > this.saldo){

            console.log('Compra negada! O valor é maior do que o saldo disponível');

        }
        else{

            this.saldo -= valor;
            console.log(`Compra efetuada com sucesso! O saldo restante disponível é ${this.saldo}`);

        };

    },

};

//THIS É UMA PALAVRA RESERVEDA QUE REPRESENTA A INSTÂNCIA DESEJADA DO OBJETO QUE EM QUESTÃO. AO INVÉS DE COLOCAR CLIENTE.SALDO, NESSE CASO, PODEMOS COLOCAR SOMENTE THIS.SALDO.