//O método map() é semelhante ao forEach(), pois também percorre um array, mas difere por poder retorar um array caso a função de callback retornar algum valor

const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {

    return nota + 1 >= 10 ? 10 : nota + 1; //Operador ternário

});

console.log(notasAtualizadas);