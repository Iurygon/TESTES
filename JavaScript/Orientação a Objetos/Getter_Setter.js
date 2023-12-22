class User{ 
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role = 'admin', ativo = 'true'){ 
        this.#nome = nome 
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role
        this.#ativo = ativo
    }
    get nome(){
        return this.#nome
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if (novoNome === ''){
            throw new Error ('Formato Inválido')
        }
        this.#nome = novoNome
    }
    exibirInfos(){
        return `${this.nome}, ${this.email}`
        /*Este método também sofre alteração do que era antes. Perceba que suas propriedades não estão mais fazendo uso de '#', e isso se deve porque, agora, está o valor que está sendo referenciado no método não é mais a propriedade privada, e sim o getter dessa respectiva propriedade. */
    }
}

const novoUser = new User ('Iury', 'iury@email.com', '10/08/2003')
console.log(novoUser.nome)
novoUser.nome = 'João'
console.log(novoUser.nome)


/*Já vimos que o conceito de encapsulamento é responsável por esconder métodos e atributos que não devem ser expostos fora de uma classe. Porém, como também vimos, existem também funções específicas para esse trabalho, que são os GETTER e SETTERS. Essas propriedades acessoras são métodos que definem quais atributos podem ser acessados de fora da classe e de que forma eles terão esse acesso.

GETTERS

get nome(){
        return this.#nome
}

O getter é como uma função de leitura, e sua declaração é semelhante com a de uma função, porém elas nunca devem receber parâmetro e apenas retornam o que está dentro delas. Apesar disso, ainda precisamos fazer a declaração usando parênteses e abrindo e fechando chaves, até porque um getter aceita códigos, então é possível, por exemplo, colocar uma estrutura condicional nele.
Porém, na hora de fazer a chamada do getter, fazemos a chamada sem o uso de parênteses, apenas passando como se fosse um atributo comum da classe

console.log(novoUser.nome)

E outro ponto importante é que este método deve ser construído dentro da super classe onde está sendo definidos os outros métodos e propriedades, e que é de onde as sub classes irão herdar suas características.

Como foi visto, foi implementado um get para receber cada atributo da classe. Isso é importante por motivos de especialização, isto é, cada classe, método e atributo ser responsável são únicos, de certa forma, e para evitar acoplamento.
Imagine, por exemplo, que tivesse todos os atributos em um get e eu quisesse apenas o 'nascimento'. Seria invável chamar o get e receber todos os demais atributos, além de que isso também dificulta implementação de testes e reaproveitamento de código.

Por fim, é interessante fazer uso de acessores mesmo que não haja propriedades privadas, pois assim você limita em poucos pontos em que as propriedades podem ser acessadas e modificadas, tornando mais fácil debugar o código.

SETTERS

set nome(novoNome){
        this.#nome = novoNome
}

Já o setter, diferente do getter que é um método de leitura, é um método usado para fazer a modificação de um campo. Também é declarado como função, mas recebe um único argumento, que será o novo valor do atributo.

novoUser.nome = 'João'

Um detalhe importante, é que tanto o getter quanto o setter foram declarados com o mesmo nome da sua respectiva propriedade. Isso é interessante de se fazer porque, ao usar de fato esses métodos, você estará usando da mesma forma como se a classe não tivesse propriedades privadas, tornando muito mais fácil o uso.

E por fim, temos que ressaltar que o método set não substitui o construtor da classe. O construtor tem a função de garantir que todos os dados que são necessários para a criação do novo objeto gerado a partir da classe sejam passados, enquanto que o setter tem a função de alterar alguma dessas propriedades e, portanto, fazer a sua validação.


Assim, vimos as duas partes mais essenciais do encapsulamento, que são as as propriedades e métodos privados, e os métodos acessores.
*/