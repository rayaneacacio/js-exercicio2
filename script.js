const students = [
  {
    name: 'Joao',
    nota1: 6,
    nota2: 8
  },
  {
    name: 'Leticia',
    nota1: 7,
    nota2: 10
  },
  {
    name: 'Julia',
    nota1: 4,
    nota2: 8
  },
  {
    name: 'Diego',
    nota1: 6,
    nota2: 4
  },
  {
    name: 'Andersson',
    nota1: 10,
    nota2: 9
  }
]

function media(nota1, nota2){
  return(nota1+nota2)/2
}

for(let student of students){

  if(media(student.nota1, student.nota2)>=7){
    alert(`A média do aluno(a) ${student.name} é: ${media(student.nota1, student.nota2)}\n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else{
    alert(`A média do aluno(a) ${student.name} é: ${media(student.nota1, student.nota2)}\n Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}