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

//Function för splitnota
function splitnota() {
    //price för summan
    let price = Number(document.getElementById("price").value);
    //count för antal personer
    let count = Number(document.getElementById("count").value);
    //tip för dricks
    let tip = Number(document.getElementById("tip").value);
    
    //Räkna ut summan
    let splitsumman;
    //Ta emot price, count, tip
    if (price, count, tip) {
        //Räkna ut dricks
        tipamount = price * tip;
        //Räkna ut summan
        reslutat = (price + tipamount) / count;
        //Skriva uut summan 
        text = "Varje person ska betala " + reslutat + " SEK";
      //Om användare skriva inte in i fälte
    } else {
        text = "Vänligen fyll i alla fält";
    }
    //Skriva ut texten
    document.getElementById("split").innerHTML = text;
    //Visa in konsolen
    console.log(text);
}

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
SET variabel startOrd till "FOUR";
SET variabel slutordOrd till "FIVE";
Skapa antalgissning på 0

Function puzzle
    Return om ordet ginns i ordbok
End function

Function justone
    LET diffirence på 0
    FOR kolla om forword ändra med en bokstav
        IF forword jamföra med newword
        diffirence öka
End function

Function läsinsvar
    LET nowWord är också startord
    LET gissaOrd med prompt

    WHILE gissaOrd stämmer inte med finalOrd
        antalGissning öka varje gång som användare gissa
        IF gissaOrd finns i ordBok
            IF nowWord och gissaOrd stämmer med ändning och med en bokstav
            ELSE warning att användare måste ändra bara med en bokstav
        ELSE gissaOrd finns inte i ordBok
            Warning
            Försöka igen
    END WHILE
    IF gissaOrd stämmer med finalOrd
        Skriv "Grattis"
End function


*/



//Ord listan
const ordBok = ["FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE"];

//Start ordet
const startOrd = "FOUR";

//Sista ordet
const finalOrd = "FIVE";

//Gissning antal start med 0
let antalGissning = 0;

//Jämföra om ordet finns i ordbok
function puzzle(input) {
    return ordBok.includes(input);
}

//Function för kolla om ordet ändra med en bokstav
function justOne(forWord, newWord) {
    let diffirence = 0;

    //Jämföra ord om ordet 
    for (let i = 0; i < forWord.length; i++) {
        if (forWord[i] !== newWord[i]) {
            diffirence++;
        }
    }

    //Fortsätta om ordet ändra bara en bokstav
    return diffirence === 1;
}

function läsinsvar() {
    //Nu ord är också start ord
    let nowWord = startOrd;
    let gissaOrd = prompt("Starta spelet\n\nDu ska gissa orden genom att byta en bokstav i taget.\n\nStartord är " + nowWord);

    //Ordet som skriva av användare som är inte den finalord
    while (gissaOrd !== finalOrd) {
        antalGissning++;
        
        if (puzzle(gissaOrd)) {
            //Om användare skriva ordet som är rätt och ändra bara en bokstav 
            if (justOne(nowWord, gissaOrd)) {
                nowWord = gissaOrd;
                gissaOrd = prompt("Bra! det var rätt!! \n\nNuvarande ord: " + nowWord + "\n\nGissa ett ord som skiljer sig med en bokstav från " + nowWord + ". \n\nDu har gissat " + antalGissning + " gånger.");
              //Om användare skriva ordet som har blivit ändra mer än en bokstav
            } else {
                alert("Får använda bara en bokstav i tagen");
                gissaOrd = prompt("Tyvär! Det var fel!! \n\nNuvarande ord: " + nowWord + "\n\nSkriver ett ord som skiljer sig med ett bokstav från " + nowWord + ". Du har gissat " + antalGissning + " gånger.");
            }
          //Om användare skriva ordet som finns inte i ordbok
        } else {
            alert("Det var Fel!! " + "\n\nDu har gissat " + antalGissning + " gånger");
            gissaOrd = prompt("Tyvär! Det var fel!! \n\nNuvarande ord: " + nowWord + "\n\nSkriver ett ord som skiljer sig med ett bokstav från " + nowWord + ". Du har gissat " + antalGissning + " gånger.");
        }
    }

    //När användare gissa rätt den finalord
        alert("Grattis!!\n\nDu klara det!!\n\nDu klara på den " + antalGissning + " gånger");
}

//Start function
läsinsvar();
