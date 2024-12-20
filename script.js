// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
Starta
    Skapa function splitnota:
        Läs in värdet för summan i "price" från anvädarens input
        Läs in värdet för antal personen i "count" från anvädarens input
        Läs in värdet för dricks i "tip" från anvädarens input
    
        Räkna ut värden med "price, count, tip"
            Räkna ut dricks med tip till tipamount: tipamount = price * tip
            Räkna ut den totala belooppet per personen: reslutat = (price + tipamount) / count
            Skriv ut texten: "Varje person ska betala (reslutat) SEK"
        Om användare fyll inte in information
            Skriv ut texten: "Vänligen fyll i alla fält"
        
        Skriv ut reslutat på sidan
        Skriv ut resultat på konsole sidan.
End
*/

function splitnota() {
    let price = Number(document.getElementById("price").value);
    let count = Number(document.getElementById("count").value);
    let tip = Number(document.getElementById("tip").value);
    
    let splitsumman;
    if (price, count, tip) {
        tipamount = price * tip;
        reslutat = (price + tipamount) / count;
        text = "Varje person ska betala " + reslutat + " SEK";
    } else {
        text = "Vänligen fyll i alla fält";
    }
    document.getElementById("split").innerHTML = text;
    console.log(text);
}

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*



play();

function play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";
    Skapa antalgissning på 0

    SKapa 


end function



function isOneLetterApart(wordOne, wordTwo)
    set variabel diffCount till 0;

    // Här behöver du skriva koden för din funktion

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function;
*/

//--------------------Done---------------//
const ordbok = ["FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE"];
const startord = "FOUR"
const finalord = "FIVE";
let antalgissning = 0;

function puzzle(input) {
    return ordbok.includes(input);
}

function läsinsvar() {
    let användareinput = prompt("Starta spelet \n\nDu ska gissa orden genom att byta ett bokstav från den starta orden \n\nStarta orden är " + startord);
        
    antalgissning++;

    while (användareinput !== finalord) {
        if (puzzle(användareinput)) {
            användareinput = prompt("Bra! Det var rätt!! \n\nNuvarande ord: " + användareinput + "\n\nSkriver ett ord som skiljer sig med ett bokstav från " + användareinput + "\n\nDu har gissat " + antalgissning + " gånger");
            antalgissning++;
        } else {
            if (chance(användareinput)) {
                alert("Får använda bara 1 bokstav i tagen");
                antalgissning++;
            } else {
                alert("Det var Fel!! " + "\n\nDu har gissat " + antalgissning + " gånger");
                användareinput = prompt("Tyvär! Det var fel!! \n\nNuvarande ord: " + användareinput + "\n\nSkriver ett ord som skiljer sig med ett bokstav från " + användareinput + "\n\nDu har gissat " + antalgissning + " gånger");
                antalgissning++;
            }
        } 

    }
    /* if (användareinput === 1) {
        alert("Får använda bara 1 bokstav i tagen");
        antalgissning++;        
        return;
    }*/
    if (användareinput === finalord) {
        användareinput = alert("Grattis!!\n\nDu klara det!!\n\nDu klara på den " + antalgissning);
    }
}

/*function chance(användareinput) {
    if (användareinput.length !== ordbok.length) return false;

    difirence = 0;
    for (let i = 0; i < användareinput.length; i++) {
        if (användareinput[i] !== ordbok[i]) {
            difirence++;
        }
    }
    return difirence === 1;
}*/

function justOne(användareinput) {
    användareinput = 0;

    if 

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falska
}

läsinsvar();