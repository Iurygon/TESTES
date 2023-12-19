import User from './UserExports.js'

class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = 'true'){ //Usamos o construtor para definir quais propriedades estarão em 'Admin'
        super(nome, email, nascimento, role, ativo) //Aqui informamos o que vamos trazer da superclasse, sem necessidade de informar os valores
    }
    aprovaEstudante(estudante, curso){
        return `Aluno ${estudante} aprovado no curso ${curso}`
    }
}

const novoDocente = new Docente ('Mariana', 'marina@email.com', '20/10/1999')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Iury', 'ADS'))

/*Importante lembrar que as funções definidas nas classes não tem a características de hoisting, então é preciso declará-las antes de chamar as funções */