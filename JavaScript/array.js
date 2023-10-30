const lista_1 = [10, 30, 25, 2, 6];
const lista_2 = [78, 1, 9, 4, 6, 12];
const lista_3 = ['João', 'Maria', 'Carla', 'Ezekiel'];

//concat() -> JUNTA DUAS ARRAYS
function concatenarListas(){
    
    return lista_1.concat(lista_2);

};


//filter() -> RETORNA UMA NOVA LISTA COM OS ELEMENTOS QUE PASSARAM NO TESTE
function filtrarListas(){

    const novaLista = lista_1.filter((valor) => valor <= 9);
    return novaLista;

};

//find() -> SEMELHANTE AO FILTER(), MAS RETORNA APENAS O PRIMEIRO ELEMENTO ENCONTRADO
function encontraValor(){

    const novaLista = lista_2.find((valor) => valor <= 9);
    return novaLista;

};

//findIndex -> FUNCIONA IGUAL FIND(), MAS RETORNA O ÍNDICE AO INVÉS DO ELEMENTO
function encontraIndice(){

    const novaLista = lista_2.findIndex((valor) => valor <= 9);
    return novaLista;

};

//findLastIndex -> SEMELHANTE AO FINDINDEX(), MAS COMEÇA DO ÚLTIMO ELEMENTO
function encontraUltimoIndice(){

    const novaLista = lista_2.findLastIndex((valor) => valor <= 7);
    return novaLista;

};

//forEach -> PERCORRE CADA ELEMENTO DA LISTA EXECUTANDO UMA FUNÇÃO QUE É PASSADA COMO PARÂMETRO. ESTA FUNÇÃO, POR SUA VEZ, PODE RECEBER ATÉ 3 PARÂMETROS: O ELEMENTO, O ÍNDICE, E O ARRAY ATUAL, RESPECTIVAMENTE.
lista_1.forEach(valor => {

 //   console.log(`O valor é ${valor}`);

})

//pop -> ALTERA O ARRAY ORIGINAL, REMOVENDO O ÚLTIMO ELEMENTO
lista_2.pop(); //REMOVEU O 12

//shift -> ALTERA O ARRAY ORIGINAL, REMOVENDO O PRIMEIRO ELEMENTO
lista_1.shift(); //REMOVEU O 10


//push -> ALTERA O ARRAY ORIGINAL, ADICIONANDO O ELEMENTO PASSADO NA ÚLTIMA POSIÇÃO
lista_2.push(15); //ADICIONOU O 15

//unshift -> ALTERA O ARRAY ORIGINAL, ADICIONANDO O ELEMENTO PASSADO NA PRIMEIRA POSIÇÃO
lista_1.unshift(21); //ADICIONOU O 21

//reduce


//reduceRight


//reverse -> INVERTE A ORDEM DOS ELEMENTOS DO ARRAY
function inverteOrdem(){

    const listaInvertida = lista_3.reverse();
    return listaInvertida;

};

//slice -> DIVIDE UMA LISTA COM BASE NOS PARÂMETROS PASSADOS (INÍCIO DA NOVA LISTA, FIM DA NOVA LISTA)
function separaLista(){

    const listaSeparada = lista_1.slice(0, lista_1.length / 2);
    return listaSeparada;

};

//sort -> ORGANIZA O ARRAY DE ACORDO COM A CLASSIFAÇÃO UNICODE, MAS NÃO FUNCIONA BEM COM NÚMEROS
function organizaOrdem(){

    const listaOrganizada = lista_3.sort();
    return listaOrganizada;

};

//splice -> CONSEGUE REMOVER UM OU MAIS ELEMENTOS CONSECUTIVOS, A DEPENDEDER DO PARÂMETRO, E INCLUIR NOVOS ELEMENTOS
lista_3.splice(1, 2, 'Bete'); //(ÍNDICE DO ELEMENTO REMOVIDO, QUANTOS ELEMENTOS SERÃO REMOVIDOS A PARTIR DELE, ELEMENTO QUE ENTRARÁ NO LUGAR)
