//Este é o padrão para se criar objetos em JS

const personagem_1 = {
    
    //Essas são as propriedades do objeto
    nome: 'Naruto',
    sobrenome: ' Uzumaki',
    cor_principal: 'Laranja',
    poder_usado: 'Clones das Sombras',

};

const personagem_2 = {

    nome: 'Sasuke',
    sobrenome: ' Uchiha',
    cor_principal: 'Roxo',
    poder_usado: 'Sharingan',

};

//Podemos acessar as propriedades de um objeto através do ponto
console.log(`O personagem ${personagem_1.nome.concat(personagem_1.sobrenome)} é rival do personagem ${personagem_2.nome.concat(personagem_2.sobrenome)}`);

//Ou através de colchetes, que é mais interessante de ser usado quando queremos passar uma lista de valores
const chaves = ['nome', 'sobrenome', 'cor_principal', 'poder_usado'];

chaves.forEach((chave) => {

    console.log(`A valor da ${chave} é ${personagem_1[chave]}.`);

});

//Para adicionar ou alterar valores
personagem_1.poder_usado = 'Rasengan';
delete personagem_1.cor_principal;

personagem_2.poder_usado = 'Chidori';
delete personagem_2.cor_principal;

console.log(personagem_1, personagem_2);