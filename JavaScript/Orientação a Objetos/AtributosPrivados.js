class User {
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

const novoUser = new User ('Maria', 'm@m.com', '10/09/2008')
console.log(novoUser.exibirInfos())
novoUser.nome = 'Mariana'
console.log(novoUser.nome)

/*Quando uma classe é criada dessa forma, seus objetos são públicos, e podem ter seus atributos alterados por funções que estão de fora dessa classe, como foi o caso de novoUser, que teve a propriedade 'nome' alterada após sua declaração. Para evitar que isso aconteça, de forma intencional ou não intencional até, é possível privar os atributos da classe de forma que funções externas da classe não sejam capazes de alterá-los.
Para isso, é usada o '#', da seguinte forma:*/

class Admin{ 
    #nome  //Para fazer a criação de um atributo privado, é primeiro preciso declarar este atributo como privado, usando '#', antes do construtor
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role = 'admin', ativo = 'true'){ //O construtor pode ser feito normalmente pois aqui apenas definimos os parâmetros que serão usados para criação do objeto
        this.#nome = nome //Depois, na hora de criar os atributos, também passamos eles com '#'
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role
        this.#ativo = ativo
    }
    exibirInfos(){
        return `${this.#nome}, ${this.#email}`
    }
    criarCurso(nomeDoCurso, quantidadeVagas) {
        return `Curso de ${nomeDoCurso} criado para ${quantidadeVagas} vagas`
    }
}

const novoAdmin = new Admin ('Iury', 'iury@email', '10/08/2003')
console.log(novoAdmin.exibirInfos())
novoAdmin.nome = 'Marcio'
console.log(novoAdmin.nome)
/*Os atributos privadas são diferentes dos atributos públicos, então aqui, não mudamos o atributo privado, mas sim meio que criamos um novo atributo público chamado nome. Se tentarmos mudar um privado, da forma a seguir, teremos erro:

novoAdmin.#nome = 'Marcio'

*/
