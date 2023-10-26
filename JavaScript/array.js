const lista_1 = [10, 30, 25, 2, 6];
const lista_2 = [78, 1, 9, 4, 12];

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

//lastIndexOf -> SEMELHANTE AO FINDINDEX(), MAS COMEÇA DO ÚLTIMO ELEMENTO
function encontraUltimoIndice(){

    const novaLista = lista_2.lastIndexOf((valor) => valor <= 3);
    return novaLista;

};

//forEach


//pop


//shift


//push


//push


//unshift


//reduce


//reduceRight


//reverse


//slice


//sort


//splice


