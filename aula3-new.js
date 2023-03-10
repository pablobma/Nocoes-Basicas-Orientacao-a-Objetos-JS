// Métodos são funções criados dentro do contexto de um objeto
function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = () => {
        return `${this.nome}, ${this.email}`
    }
}

// Criando objetos usando um construtor
const novoUser = new User('Pablo', 'p@p.com');
console.log(novoUser.exibirInfos());


// Object.create()
function Admin(role) {
    User.call(this, 'Logan', 'l@l.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype);  //Object.setPrototypeOf(Admin, User);

const novoUser2 = new Admin('admin');

console.log(novoUser2);

console.log(novoUser2.exibirInfos());

// NO COTIDIANO NÃO SE USA PROTOTYPE!