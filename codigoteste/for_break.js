let listaDeNomes = ["Cesar", "Pamela", "Camila", "Hendy"];
let buscar = "Cesar";
// Nome que iremos buscar
// for (let i = 0; i < listaDeNomes.length; i++) {
//   if (listaDeNomes[i] == buscar) {
//     console.log("Encontrei o nome");
//   }
// }

let nomeCorreto = listaDeNomes.filter((nome) => nome === buscar);
console.log("O nome " + nomeCorreto + " foi encontrado");
