"use strict";
console.clear();

/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const biciclette = [
    {
        nome: "Eleglide",
        peso: 21,
    },
    {
        nome: "Graziella",
        peso: 18,
    },
    {
        nome: "Bmx",
        peso: 22,
    },
    {
        nome: "Mountain-bike",
        peso: 19,
    },
    {
        nome: "Pinarello",
        peso: 3,
    },
    {
        nome: "Bici elettrica",
        peso: 3,
    },
];

// Creo una variabile e le assegno i valori del primo oggetto indicando il suo indice: [0]
let biciLeggera = biciclette[0];
for (let i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciLeggera.peso) {
        biciLeggera = biciclette[i];
    }
}
console.log(biciLeggera);   // Visualizzo l'oggetto contenente la bici più leggera in console.log

const divBikes = document.querySelector("main #view");
// Creo un template html contenente i dati della bici più leggera
const template = `
  <div>
    <h4>La bici più leggera e la: ${biciLeggera.nome}</h4>
    <div>Il peso della bici è: ${biciLeggera.peso} kg</div>
  </div>
  `;
// Aggiungo il template alla pagina
divBikes.innerHTML += template;



/* Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const footballTeam = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Udinese",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

for(let key in footballTeam) {
    footballTeam[key].puntiFatti = getRndInteger(100, 1);
    // console.log(footballTeam[key].puntiFatti = getRndInteger(100, 1));
    footballTeam[key].falliSubiti = getRndInteger(100, 1);
    // console.log(footballTeam[key].falliSubiti = getRndInteger(100, 1));
}
// console.log(footballTeam);
