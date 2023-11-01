//O método reduce(), neste caso e mais comumente, recebe dois parâmetros: uma função de callback que vai ser executada em cada iteração, e uma variável que pode ser acessada dentro da função definida. No fim, o método retorna um único valor, reduzindo o array.

const notas = [43, 50, 65, 12];

function calculaMedia(notasDaSala){

    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
    const media = somaDasNotas / notasDaSala.length;
    return media;
    
};

console.log(calculaMedia(notas));