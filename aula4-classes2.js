//Trabalhando com herança de classes
class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo 
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}


// User é uma super classe de Admin, e esta é uma subclasse de User
class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, numeroDeVagas) {
        return `Curso de ${nomeDoCurso} criado com ${numeroDeVagas} vagas`
    }
}

const novoAdmin = new Admin('Logan', 'l@dog.com', '2021-01-01');

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());

console.log(novoAdmin.criarCurso('JS', 20));



class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovando no curso ${curso}`
    }
}

const novoDocente = new Docente('Luiza', 'l@l.com', '2020-02-02');

console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Pablo', 'SQL'));
