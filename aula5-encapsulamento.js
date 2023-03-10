// O encapsulamento faz com que os dados das classes fiquem "escondidos", com o intuito de protegê-los
// Para isso, basta usar o "#" antes do atributo e declará-lo na classe
/*
Atributos Privados - Só podem ser acessados por funções de dentro da classe; após isso, pode ser público
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

const novoUser = new User('Priscila', 'p@p.com', '1981-08-28');
console.log(novoUser.exibirInfos());

// novoUser.#nome = 'Pablo'; // Causará erro!

