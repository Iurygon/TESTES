/*O Polimorfismo é um dos princípios de linguagens orientadas a objetos em que objetos diferentes possuam o mesmo método, mas que este método se comporte de maneira diferente nesses objetos. Para que isso ocorra, o método precisa ter a mesma assinatura em ambos os objetos, isto é, ter o mesmo nome e parâmetros, mas que o corpo da função do método sejam diferentes.
Isto ocorre porque em algumas linguagens de programação (não é o caso de JS), podem haver métodos que possuam o mesmo nome, logo não é necessário a assinatura para que seja melhor especificado qual o método.
Vejo no exemplo a seguir: */

class User {
    constructor(nome, email, nascimento, role, ativo = true){ 
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante' 
        this.ativo = ativo
    }
    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.role}`
    }
}

class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = 'true'){
        super(nome, email, nascimento, role, ativo)
    }
    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
    criarCurso(nomeDoCurso, quantidadeVagas) {
        return `Curso de ${nomeDoCurso} criado para ${quantidadeVagas} vagas`
    }
}

const novoUser = new User ('Iury', 'i@i.com', '10/08/2003')
const novoAdmin = new Admin ('Sergio', 'gordaum@forguetes.com', '01/01/01')

console.log(novoUser.exibirInfos())
console.log(novoAdmin.exibirInfos())

/*Aqui, tanto o método construtor quanto o método exibirInfos possuem polomorfismo, já que em ambas as classes eles possuem a mesma assinatura, com o nome e parâmetros iguais (mesmo que exibirInfos não possua parâmetros), mas possuam funções diferentes.*/