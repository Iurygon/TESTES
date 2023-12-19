/*Classes são uma forma mais palatável de definir e instancear objetos em JS.*/
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

const novoUser = new User('Iury', 'iury.email@email.com', '10/08/2003')
console.log(User)
console.log(novoUser)
console.log(novoUser.exibirInfos())
console.log(User.prototype.isPrototypeOf(novoUser))
/*Aqui, por fim, vemos que mesmo usando o formato de classes, ainda há a propriedade prototype sendo passada pela cadeia de protótipos até o objeto
novoUser */