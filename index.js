class Aluno {
    constructor(nome, login, ra) {
        this.nome = nome;
        this.login = login;
        this.ra = ra;
    }
}

class Turma {
    constructor(codigo, nota) {
        this.codigo = codigo;
        this.nota = nota;
    }

    aprovado() {
        return this.nota >= 6;
    }
}

class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    aprovado() {
        return this.nota >= 6 && this.frequencia >= 75;
    }
}

let aluno = new Aluno('João', 'joao1234', '1234');

let turmaOnline = new Turma('TURMA1', 7);
console.log(`Status de aprovação do aluno na turma online: ${turmaOnline.aprovado()}`); 

let turmaPresencial = new TurmaPresencial('TURMA2', 7, 80);
console.log(`Status de aprovação do aluno na turma presencial: ${turmaPresencial.aprovado()}`); 

let turmaPresencial2 = new TurmaPresencial('TURMA3', 7, 70);
console.log(`Status de aprovação do aluno na turma presencial 2: ${turmaPresencial2.aprovado()}`); 
