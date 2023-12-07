const user = {
	nome: 'Iury',
	dataNascimento: '10/08/2003',
	email: 'iury.silva@email.com',
	role: 'admin',
	 ativo: true,
	 exibirInfo: function() {
		console.log(this.nome, this.email)
	 }
}

//Esse comando a seguir é o mesmo:

const exibir = user.exibirInfo;

//É o mesmo que esse comando:

const exibirInfos = function(){
	console.log(this.nome, this.email)
}
//Porém, esse comando retorna 'undefined', isso porque não há nenhuma ligação entre essa função com o objeto 'user'

 //Para que seja possível chamar algum método do objeto 'user' é necessário antes então fazer essa ligação com o objeto, que é feito dessa forma:
const exibirInfosFuncional = exibir.bind (user);
exibirInfosFuncional()
exibir()

/*Aqui, podemos ver que exibirInfosFuncional e exibir retornam valores diferentes. Isso porque, quando passamos uma função como valor para dentro de uma variável, não estamos criando uma referência daquela função, e sim criando uma cópia. Por isso que, mesmo fazendo o bind com a função exibir na variável exibirInfoFuncional, a função exibir continua sem ter nenhum contexto relacionado com o objeto. */
