class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [];

alunos.push(new Aluno("Guilherme", 8))
alunos.push(new Aluno("Graziele", 9))
alunos.push(new Aluno("Erica", 5))
alunos.push(new Aluno("João", 6))
alunos.push(new Aluno("Marcos", 5))
alunos.push(new Aluno("Leticia", 10))
alunos.push(new Aluno("Sofia", 7))
alunos.push(new Aluno("Pedro", 4))

function alunosAprovados(alunos) {
    let alunosMediaAlta = []
    alunos.forEach(aluno => {
        if (aluno.nota >= 6) {
            alunosMediaAlta.push(aluno)
        }
    });
    return alunosMediaAlta;
}
console.log(alunosAprovados(alunos))
