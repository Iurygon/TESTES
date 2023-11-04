/*

O formato JSON é muito utilizado para escrever objetos do JS. É muito utilizado quando temos um conjunto de configurações ou padrão que queremos inserir no código e acessá-lo em outros lugares. Além de permitir transformar objetos em strings e transmitir esses dados para um sistema em outro formato. Sendo assim, uma das suas maiores funcionalidades é permitir tornar objetos em algo mais fácil de manipular por outros sistemas.

Possui algumas regras como:

. NÃO EXISTEM VARIÁVEIS;
. CHAVES DAS PROPRIEDADES E PROPRIEDADES QUE PRECISAM DE ASPAS DEVEM TER ASPAS DUPLAS;
. PODEM EXISTIR ARRAYS E OBJETOS ANINHADOS;
. É PROIBIDO TER VÍRGULA NO ÚLTIMO ITEM DO BLOCO;
. SUPORTA APENAS TIPOS PRIMITIVOS;
. FUNÇÕES, COMENTÁRIOS, UNDEFINED NÃO SÃO PERMITIDOS;

*/

//Para fazer a leitura de um objeto em JSON, devemos ter a seguinte forma:

const dados = require('./cliente.json');

console.log(dados);

//Como foi dito, é possível transformar um .json em string e vice-versa. Para isso, usamos os metódos do objeto global JSON .stringfy() e .parse().

const dadosEmString = JSON.stringify(dados);

console.log(dadosEmString);

const dadosObjeto = JSON.parse(dadosEmString);

console.log(dadosObjeto);