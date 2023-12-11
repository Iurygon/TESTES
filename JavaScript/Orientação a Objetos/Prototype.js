const user = {
    nome: 'Iury',
    dataNascimento: '10/08/2003',
    email: 'iurygon.silva@gmail.com',
    role: 'estudante',
    ativo: true,
    exibirInfo: function(){
        console.log(this.nome, this.email)
    }
}

const user2 = {
    nome: 'Marcelin',
    dataNascimento: '12/03/1998',
    email: 'LilMarcelo@gmail.com',
    role: 'professor',
    ativo: true,
    avaliaAluno: function(){
        console.log('Aluno aprovado!')
    }
}

const admin = {
    nome: 'Mariana',
    dataNascimento: '01/01/2000',
    email: 'mariana@gmail.com',
    role: 'admin',
    ativo: true,
    criarCurso: function(){
        console.log('Curso criado!')
    }
}
/*Para que o objeto admin tenha acesso às mesmas funções do objeto user, sem que precise fazer repetição do código, podemos usar o objeto user como 
protótipo para o objeto admin, dessa forma, ele irá herdar os mesmos métodos do outro. Para isso, fzemos uso da função nativa de objetos a seguir,
o setPrototypeOf, que recebe como primeiro parâmentro o objeto que irá herdar os métodos, e o segundo parâmetro é o objeto que conceder o método.*/

Object.setPrototypeOf(user, user2);
Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfo();
admin.avaliaAluno();

/*Na forma que isso ocorre, ao chamar a função 'exibirInfo' e ela não ser encontrada no objeto admin, essa função será procurada no objeto que foi
passado como protótipo. Essa ação de ir 'pingando' entre objetos é chamada de 'Cadeia de Protótipos', e ela pode se estender até que seja encontrado
o protótipo do objeto Object, que é comum a todos os objetos JS e que possui métodos próprios, como o setPrototypeOf.*/

/*É possível verificar, usando a ferramenta de desenvolvedor em algum navegador, qual é o protótipo usado para criação de um objeto usando o método 
'__proto__'. Isso pode ser feito seguido toda a cadeia, ficando mais ou menos dessa forma, como exemplo:

admin.__proto__.__proto__.__proto__

Dessa forma, podemos seguir vendo qual foi o protótipo de admin(user), seguido do protótipo de user(user2), seguido do protótipo de user2(Objetct).
Como chegamos no fim da cadeia, se usarmos o método __proto__ novamente, teramos null como resultado.

Agora, caso quisermos ver sobre outros tipos de dados, como Object, Array e String, e seus métodos, podemos usar o método prototype, ficando assim,
por exemplo: Array.prototype. Isso ocorre pois, por baixo dos planos, tudo o que é criado em JS é um objeto.

*/