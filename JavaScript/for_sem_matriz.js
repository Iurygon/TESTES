const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [...notas1, ...notas2, ...notas3]; //Aqui é usado uma outro forma de destructuring, em que as reticências informam que não é uma lista de listas, e sim que é pra pegar os elementos de cada lista e forma uma nova com eles.
console.log(notasGerais);

let soma = 0;
let media = 0;

notasGerais.forEach(nota => {
  soma += nota;
  console.log(soma);
});

media = soma / notasGerais.length;
console.log(media);