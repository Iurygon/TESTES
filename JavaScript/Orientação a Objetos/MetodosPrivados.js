// class User{  //Para fazer a criação de um atributo privado, é primeiro preciso declarar este atributo como privado, usando '#', antes do construtor 
//     #nome
//     #email
//     #nascimento
//     #role
//     #ativo
//     constructor(nome, email, nascimento, role = 'admin', ativo = 'true'){ //O construtor pode ser feito normalmente pois aqui apenas definimos os parâmetros que serão usados para criação do objeto
//         this.#nome = nome //Depois, na hora de criar os atributos, também passamos eles com '#'
//         this.#email = email
//         this.#nascimento = nascimento
//         this.#role = role
//         this.#ativo = ativo
//     }
//     #montaObjUser(){
//         return ({
//             nome: this.#nome,
//             email: this.#email,
//             nascimento: this.#nascimento,
//             role: this.#role,
//             ativo: this.#ativo
//         })
//     }
//     exibirInfos(){
//         return `${this.#nome}, ${this.#email}`
//     }
// }
//CÓDIGO ANTIGO ANTES DE PASSAR O MÉTODO PRIVADO PARA O MÉTODO PÚBLICO

class User{  //Para fazer a criação de um atributo privado, é primeiro preciso declarar este atributo como privado, usando '#', antes do construtor 
    #nome
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
    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }
    exibirInfos(){
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}` //Aqui, o 'this' foi alterado para o objeto 'objUser', pois o acesso será feito através dele, por isso também não é necessário usar '#', já que na construção desse objeto, não foi usado '#'
    }
}
/*Um método que tenha funções importantes, ou que guarde dados importantes, é interessante que seja privado também. Para isso, usa-se '#' semelhante à forma de declarar atributos privados. Nesse caso, criamos um método que retorna um objeto literal que tem acesso às propriedades da classe, afinal está declarado dentro da classe User. */

const novoUser = new User ('Iury', 'iury@email.com', '10/08/2003')
console.log(novoUser.exibirInfos())

/*console.log(novoUser.#montaObjUser())

Se tentarmos usar o método acima, usando o código antigo, teremos um erro, afinal estamos tentando acessá-lo de fora da classe, o que não é permitido. Para conseguirmos acessar o método então, precisamos fazer uma pequena refatoração no método exibirInfos(), que é um método público de dentro da classe User e que tem acesso ao #montaObjUser, ficando da forma atual e permitindo acessar o método privado.

Importante lembrar que as propriedades e métodos privados ficam tão bem privados que não são acessados nem pelas sub-classes do objeto e, portanto, para fazer uso dessas propriedades e métodos, é necessário fazer uso de outros pontos importantes do Encapsulamento de objetos que são os 'Acessores' getter e setters.*/