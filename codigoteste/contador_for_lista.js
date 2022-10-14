//Imprimir Matérias Escolares

let listaDeMaterias = [
  "Língua Portuguesa",
  "Matemática",
  "Biologia",
  "Física",
  "Química",
  "Artes",
  "Educação Física",
  "Língua Inglesa",
  "Filosofia",
  "Geografia",
  "História",
  "Sociologia",
];

let posicaoFinal = listaDeMaterias.length - 1;

console.log("========================================================");
console.log("Lista de matérias");
//modo antigo
for (let i = 0; i <= posicaoFinal; i++)
  console.log("Matéria: " + listaDeMaterias[i]);

console.log("========================================================");
//modo moderno
listaDeMaterias.forEach((materia) => console.log("Matéria: " + materia));
console.log("========================================================");
