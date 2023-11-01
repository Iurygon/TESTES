const lista1 = [10, 6.5, 8, 7.5];
const lista2 = [9, 6, 6];
const lista3 = [8.5, 9.5];

const matriz = [lista1, lista2, lista3];

let media = 0;

for(let i = 0; i < matriz.length; i++){

    for(let j = 0; j < matriz[i].length; j++){

        media += matriz[i][j] / matriz[i].length;

    };

};

media = media / matriz.length;

console.log(media);