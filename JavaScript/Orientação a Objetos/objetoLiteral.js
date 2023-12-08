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