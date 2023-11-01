const listaAlunos = ['João', 'Carla', 'Miguel', 'Maira'];
const listaNotas = [10, 8, 7, 9.5];
const alunosENotas = [listaAlunos, listaNotas ]; //Uma matriz é uma lista de listas, neste caso, temos duas. Para acessar um elemento, usa-se [indice da lista], [indice do elemento]

function encontraElemento(aluno){

    if(alunosENotas[0].includes(aluno)){//"includes()" verifica se um elemento está incluso em uma lista

        //const alunos = alunosENotas[0];
        //const notas = alunosENotas[1];

        //DESESTRUTURAÇÃO DE LISTA
        const [alunos, notas] = alunosENotas; //Nessa forma, os elementos do lado esquerdo da lista vão receber seu correspondente do lado direito, ficando mais enxuta a declaração das variáveis

        const indiceAluno = alunos.indexOf(aluno);
        const notaAluno = notas[indiceAluno];
        console.log(`${aluno} tem a nota ${notaAluno}`);

    }
    else{

     console.log('Aluno não encontrado!');   

    };

};
encontraElemento('Carla');