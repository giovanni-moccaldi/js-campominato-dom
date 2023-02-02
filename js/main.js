const bottone = document.getElementById("play")
bottone.addEventListener(
    "click",
    function () {
        generate(listtowrite, 1);
    }
)
const listtowrite = document.getElementById("big-square");
// assegno numeri in una funzione per 100
// generate(listitem, 1);
function generate() {
    // assegno i valori
    const whitelist = [];
    for (let i = 1; i <= 100; i++) {
        whitelist.push(i);
        // console.log(whitelist);


    }
    listtowrite.innerHTML = "";

    for (let i = 0; i < 100; i++) {
        // creo un div per mettere i numeri
        const listitem = document.createElement("div");
        // qui scrivo i numeri nel html
        listitem.innerHTML = whitelist[i];
        // aggiungo una classe
        listitem.classList.add("smallsquare");
        listtowrite.append(listitem);

        // aggiungo un click
        listitem.addEventListener(
            "click",
            function () {
                this.classList.toggle("azzurro");
                console.log(whitelist[i])
            }

        )
    }
}
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//  Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
// genero 16 numeri casuali non uguali
// const numeridiversi = [];
const numeridiversi = []
for (let i = 0; numeridiversi.length < 16; i++) {
    let numerirandom = Math.floor(Math.random() * 100) + 1;
    console.log(numeridiversi)
    if (numeridiversi.includes.numerirandom); {
        numeridiversi.push(numerirandom);
    }
}
console.log(numeridiversi)