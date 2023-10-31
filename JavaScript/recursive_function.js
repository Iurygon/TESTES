//Função recursiva é toda função que invoca a si mesma. As regras pra uma função recursiva são:
//1 - Deve invocar a si mesma
//2 - Tem uma forma de interromper o loop

const getFactorial = (number) => {  //Definimos uma função que vai fazer a fatoração de um número

    if (number === 1){

        return 1    //Aqui temos o elemento de parada, visto que, caso o número seja 1, não vai mais chamar a função novamente

    };
    return number * getFactorial(number - 1); 
    //Aqui, supondo que a função receba o número 3, ela seja executada até que o valor do número se torne 1. Assim, a função será chamada 3 vezes e cada recursividade dela deve dar um retorno.
    //Inicialmente ela é passada chamado o número 3, depois 2 e por fim 1, quando encerra as chamadas e o retorno é 1. Nesse caso, na segunda chamada, teremos então o retorno de 2 * 1 = 2 para a primeira chamada.
    //E por fim, na primeira chamada, temos o retorno da segunda, 2, vezes o que o valor que foi passado no ínicio, 3, retornando assim 6.

};

console.log(getFactorial(3));