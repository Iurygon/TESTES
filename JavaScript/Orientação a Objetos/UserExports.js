export default class User {
    constructor(nome, email, nascimento, role, ativo = true){ //Aqui é definido o construtor da classe, que será usado para criar novas instâncias do objeto
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante' //Caso não receba nenhum valor, será declarado como estudante
        this.ativo = ativo //Ativo já vem com o padrão 'true'
    }
    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

/*Código 'npm init -y' é usado para criar um arquivo package.json, que é um arquivo de configuração do projeto, e nele inserimos uma nova propriedade
'type' com valor 'module', que irá informar que, nesse projeto, fazemos importação/exportação de módulos usando o EcmaScript Modules, através dessa 
propriedade 'export default'.
Para importar, usamos 'import User from "./UserExport.js";', e assim terá acesso ao objeto User em outros arquivos */

/*Cada arquivo .js é um módulo própria com suas próprias funções, variáveis e classes. Para se usar algo de um módulo em outro, é necessário fazer
a exportação/importação do arquivo em um outro módulo, seja utilizando a sintaxe CommonJs (CJS) ou EcmaScript Modules (ESM), que foi a que usamos nesse caso

PADRÃO CJS
Utilza o método require() para fazer a importação de outros módulos, podendo ser usado para exportar e importar somente uma ou todas as funções declaradas
em um arquivo .js, ficando dessa forma:

    module.exports = function soma(num1, num2) {
    return num1 + num2;
    };

ou

   function soma(num1, num2) {
        return num1 + num2;
    }

    function multiplica(num1, num2) {
        return soma(num1, num2) * 2;
    }

    module.exports = { multiplica, soma }; //Essa é uma forma de exportar mais de uma função, por exemplo

E a importação do arquivo é feita dessa forma:

    const { multiplica, soma } = require('./caminho/arquivo');

    const resultadoMult = multiplica(2, 2);
    const resultadoSoma = soma(2, 2);

Também pode ser usado para módulos externos instalados via npm install e para funções built-in do Node.js

PADRÃO ESM
É um método mais recente, adicionado no ES6, que faz processo de exportação/importação com 'export' e 'export default' e 'import <nomeModulo> from '/caminho/modulo.js'. Alguns exemplos:

    export function soma(num1, num2) {
    return num1 + num2;
    }

    export function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
    }

ou

    function soma(num1, num2) {
    return num1 + num2;
    }

    function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
    }

    export default multiplica;

A forma para exportar mais de uma função é semelhante ao CJS.
E para importar, é feito da seguinte forma:

    import soma from './caminho/arquivo.js';

ou

    import * as operacoes from './caminho/arquivo.js'; //Importando todo o objeto exportado de uma só vez
    const soma = operacoes.soma(1, 2);
    const multiplica = operacoes.multiplica(1, 2);

Importante lembrar que, para usar desta forma, é importante incluir no package.json a propriedade "type": "module"
*/