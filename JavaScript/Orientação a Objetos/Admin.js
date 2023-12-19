import User from './UserExports.js';

class Admin extends User{ //Extends é usado para informar que esta classe 'Admin'(subclasse) herdará da classe 'User'(superclasse)
    constructor(nome, email, nascimento, role = 'admin', ativo = 'true'){ //Usamos o construtor para definir quais propriedades estarão em 'Admin'
        super(nome, email, nascimento, role, ativo) //Aqui informamos o que vamos trazer da superclasse, sem necessidade de informar os valores
    }
    criarCurso(nomeDoCurso, quantidadeVagas) { //Na forma de classes, não é preciso usar a palavra chave 'function'
        return `Curso de ${nomeDoCurso} criado para ${quantidadeVagas} vagas`
    }
}

const novoAdmin = new Admin('Rodrigo', 'rodrigo@email.com', '10/09/2000')
console.log(Admin)
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso('JS', 20))