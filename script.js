let estudantes = [
    { nome: "Alberto", nota1: 8, nota2: 7 },
    { nome: "Maria", nota1: 10, nota2: 9 },
    { nome: "Pedro", nota1: 6, nota2: 4 },
    { nome: "Vanda", nota1: 3, nota2: 8 }
]

let average = () => {
    for (let estudante of estudantes) {
        let score = (estudante.nota1 + estudante.nota2) / 2
        let message = score >= 7 ? `Parabéns, ${estudante.nome}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${estudante.nome}! Tente novamente!`
        alert(`A média do(a) aluno(a) ${estudante.nome} é: ${score}\n${message}`)
    }
}

average()