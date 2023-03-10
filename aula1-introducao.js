// Orientação a objetos é o princípio de espelhar o mundo real através de uma estrutura de objetos que se interagem

/*
    Existe uma forma muito prática de ilustrar sistemas, controles de fluxo e outros comportamentos chamado UML.
    A UML é a Linguagem de Modelagem Unificada - do inglês Unified Modeling Language.
    Um dos diagramas mais comuns de ser representado utilizando a UML é o diagrama de classe.
*/

// Classes são modelos para criar objetos diferentes

// A sintaxe específica de classes não existia antes do ES6 (atualização); antes disso, usavam-sa funções

// Objeto Literal
const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2021/01/01',
    role: 'admin',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

console.log(user);
user.exibirInfos();

// Usando o método 'bind' (prender) como herança
const exibir = function() {
    console.log(this.nome);
}

const nomeObjeto = exibir.bind(user);
nomeObjeto();


