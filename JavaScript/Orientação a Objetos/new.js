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
    User.call(this, 'Zé', 'ze@ze.com')
    this.role = role || 'estudante'
}

const novoAdmin = new Admin('admin')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())