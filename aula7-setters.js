/*
O setter aceita um parâmetro que deve ser alterado!
*/

class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo 
    }

    get nome() {
        return this.#nome
    }

    set nome(novoNome) {
        if(novoNome === '') {
            throw new Error('Nome vazio!')
        }
        
        this.#nome = novoNome
    }

    #montaObjetoTeste() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos() {
        const objTeste = this.#montaObjetoTeste();

        return `${objTeste.nome}, ${objTeste.email}, ${objTeste.nascimento}, ${objTeste.role}, ${objTeste.ativo}`
    }
}   


const novoUser = new User('Pablo', 'p@p.com', '2001-04-05');
console.log(novoUser.nome);

novoUser.nome = 'Logan';
console.log(novoUser.nome);
