const bottone = document.getElementById("play")
bottone.addEventListener(
    "click",
    function () {
        generate(listtowrite, 1);
    }
)
const listtowrite = document.getElementById("big-square");
const rednumbers = document.getElementById("big-square");
const bombe = ["13", "34", "45", "56"]

console.log(parseInt(bombe.length));


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
        parseInt(bombe);
        // aggiungo un click
        listitem.addEventListener(
            "click",

            function () {
                if (listitem[i] != bombe[i]); {
                    listitem.classList.add("red");

                }
                if (listitem == bombe) {
                    listitem.classList.add("azzurro");


                    // this.classList.toggle("azzurro");
                    // console.log(whitelist[i])
                }

            }

        )
    }
    //     // vado a generare 16 numeri casuali per il secondo esercizio e diversi tra loro
    //     const numeridiversi = []
    //     while (numeridiversi.length < 16) {
    //         let numerirandom = Math.floor(Math.random() * 100) + 1
    //         console.log(numeridiversi)
    //         if (numeridiversi.includes(numerirandom));
    //         {
    //             numeridiversi.push(numerirandom);
    //         }
    //         // ----------------------
    //         // poi per aggiungere le"bombe" vado a mettere questi numeri nella griglia trasformandoli in elementi
    //         const rednumbers = document.createElement("div");
    //         rednumbers.innerHTML = numeridiversi;
    //         rednumbers.classList.add("red");
    //         numeridiversi.append(rednumbers);
    //         rednumbers.addEventListener(
    //             "click",
    //             function () {
    //                 if (numeridiversi == listitem[i]) {
    //                     numeridiversi.classList.add("red");
    //                 }
    //             }
    //         )
    //     }
    //     console.log(numeridiversi)

}
