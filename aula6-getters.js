/* 
Getters - Funções que não recebem nenhum argumento, só retornam o que tem dentro delas.
Permitem a visualização de um atributo privado, sem alterá-lo
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