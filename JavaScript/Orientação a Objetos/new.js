/*As funções construtoras servem como modelo para criação de objetos no JS através da função 'new'. A função a seguir é uma função construtora. Veja que,
normalmente, o JS não utiliza letras maiúsulas como nomes de funções, mas nesses casos, em que estamos trabalhando com classes, é adotada essa padronização
para criação de funções construtoras*/
function User(nome, email){
    this.nome = nome;
    this.email = email;
    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
};

const novoUser = new User('Iury', 'iurygon.silva@gmail.com')
// console.log(novoUser.exibirInfos())
// console.log(novoUser)

/*Quando criamos uma nova instância de objeto dessa forma, o objeto é criado e é verificado no protótipo quais são as propriedades e métodos que deverão
ser herdados. Além de disso, é informado que esse novo objeto criado é quem deverá ser usado de contexto no lugar de 'this'*/

/*Aqui, criamos uma novo objeto, mas usando de protótipo um objeto também já criado, através da função 'call()'. Essa função recebeu, nesse caso, três
parâmetros, sendo 'this', que informa o contexto da função construtora 'User', afinal, usaremos ela como protótipo, também as propriedades nome e email,
que também vêm de 'User'. Além disso, é possível também adicionar novas propriedades, como foi o caso de 'role' */
function Admin(role){
    User.call(this, 'Iury', 'meu@email.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)/*Esse código é necessário para definir que o objeto Admin possui o mesmo protótipo de User. Mesmo usando
call na criação da função construtora Admin, ainda é preciso usar esse método para fazer essa definição de protótipo, isso porque a função call apenas
informa que deve ser usado as propriedades e métodos do objeto User, nesse caso, usando como contexto o objeto Admin, mas sem fazer definição de protótipo*/

const novoAdmin = new Admin('admin')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
console.log(Admin.prototype)

//Também é possível fazer uso do Object.create para criar objetos através de objetos literais
const userLiteral = {
    exibirInfoLiteral: function(nome){
        return nome
    }
}

const novoUserLiteral = Object.create(userLiteral)
console.log(novoUserLiteral.exibirInfoLiteral('Iury'))
console.log(userLiteral.isPrototypeOf(novoUserLiteral))

/*Note que o objeto literal userLiteral não possui função construtora, logo não é possível definir parâmetros para objetos criados através dele. Para
resolvermos isso, podemos usar o método init, e ficaria dessa forma*/

const userLiteral2 = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },
    exibirInfoLiteral: function(){
        return `${this.nome}, ${this.email}` //Agora é importante fazer o uso de this, para passar o contexto
    }
}

const maisNovoUserLiteral = Object.create(userLiteral2)
maisNovoUserLiteral.init('Iury', 'iury.silva@email.com')
console.log(maisNovoUserLiteral.exibirInfoLiteral())
