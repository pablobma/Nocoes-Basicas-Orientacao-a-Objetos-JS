const user = {
    nome: 'Pablo',
    email: 'j@j.com',
    nascimento: '2021/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: 'Logan',
    email: 'l@l.com',
    role: 'admin',
    criarCurso() {
        console.log('Função exclusiva do admin realizada!')
    }
}

admin.criarCurso();

/*
CADEIA DE PROTÓTIPO
*/
// Usando objetos de outras classes; 'user' é o protótipo de 'admin'
Object.setPrototypeOf(admin, user);

admin.exibirInfos();