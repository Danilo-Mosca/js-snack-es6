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
// Recupero l'elemento div con id viewSnack1
const divBikes = document.querySelector("main #viewSnack1");
// Creo un template html contenente i dati della bici più leggera
const template = `
  <div>
    <h4>La bici più leggera è la: ${biciLeggera.nome}</h4>
    <div>Il peso della bici è: ${biciLeggera.peso} kg</div>
  </div>
  `;
// Aggiungo il template alla pagina
divBikes.innerHTML = template;



/* Snack 2
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

// Ciclo for in che itera l'oggetto footballTeam
for (let key in footballTeam) {
    footballTeam[key].puntiFatti = getRndInteger(100, 1);
    // console.log(footballTeam[key].puntiFatti = getRndInteger(100, 1));
    footballTeam[key].falliSubiti = getRndInteger(100, 1);
    // console.log(footballTeam[key].falliSubiti = getRndInteger(100, 1));
    // console.log(key);
}
// console.log(footballTeam);

// Mi creo un array vuoto che conterrà solo i nomi e i falli subiti
const footballFoulsName = [];
for (let key in footballTeam) {
    // Popolo l'array bidimensionale
    footballFoulsName.push([footballTeam[key].nome, footballTeam[key].falliSubiti]);
    // console.log(footballFoulsName);
}
// console.log(footballFoulsName);
console.log(footballFoulsName);    //Visualizzio l'array bidimensionale contenente il nome delle squadre e i falli subiti
// Recupero l'elemento div con id viewSnack2
const divFootballTeams = document.querySelector("main #viewSnack2");
// Creo un template html contenente i dati con il nome della squadra e i falli subiti
let footballTemplate = '';
for (let valore in footballFoulsName) {
    footballTemplate += `
    <div>
        <p>Squadra: <strong>${footballFoulsName[valore][0]}</strong>
        Falli subiti: <strong>${footballFoulsName[valore][1]}</strong></p>
    </div>
    `
}
// Aggiungo il template alla pagina
divFootballTeams.innerHTML = footballTemplate;



/* Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */
const emptyArray = [];
const minim = 7;
const maxim = 50;
const result = numberFunction(emptyArray, minim, maxim);

function numberFunction(array, min, max) {
    for (let i = ++min; i < max; i++) {
        emptyArray.push(i);
    }
    return emptyArray;
}
// Visualizzio l'array che contiene i valori compresi tra i due numeri (min e max) che gli ho passato come parametri
console.log(emptyArray);
// Recupero l'elemento div con id viewSnack3
const divBonus = document.querySelector('main #viewSnack3');
let bonusTemplate = `<div>I valori compresi tra i numeri <strong>${minim}</strong> e <strong>${maxim}</strong> sono:</div>`;
for(let valore in emptyArray) {
    bonusTemplate += `
    <span><strong>${emptyArray[valore]}</strong></span>
    `;
}
// Aggiungo il template alla pagina
divBonus.innerHTML = bonusTemplate;