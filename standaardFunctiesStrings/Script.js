// aanmaken variablen
var input;
var res
var inputPos;
// ophalen input value functie
function inputValue() {
    input = document.getElementById("stringInvoer").value;
    res = document.getElementById('resultaat');
}

function globalValidation() {
    // validatie om te kijken of er iets is ingevuld
    if (input == '' || input == null){
        alert('U moet wel een string invullen');
    }
    // validatie om te kijken of dat het wel letters zijn
    if (input.match(/[a-z]/i)) {
        
    }   else{
        alert('U moet wel een geldige letter invoeren')
        throw new Error("Something went badly wrong!");
    }
}

function naarHoofdNaarKlein() {
    // functie ophalen waarde uitvoeren
    inputValue();
    globalValidation();
    var waarde = document.getElementById("upper").checked;
    //controleren of de radio butten true is
    if(waarde == true){
        //omzetten naar hoofdletters als de radio button ja is en printen
        res.innerHTML = 'De ingevoerde string omgezet naar hoofdletters letters is: ' + input.toUpperCase();;
    }   else{
        //omzetten naar kleine letters als de radio button nee is en printen
        res.innerHTML = 'De ingevoerde string omgezet naar kleine letters is: ' + input.toLowerCase();;
    }
}

function bepaalIndex(){
    // functie ophalen waarde uitvoeren
    inputValue();
    // globale validatie oproepen
    globalValidation();
    // ophalen naar welke letter moet worden gezocht
    inputPos = document.getElementById("letterInvoer").value;
    // validatie om te kijken of er iets is ingevuld
    if (inputPos == '' || inputPos == null){
        alert('U moet wel een string invullen');
    }
    // validatie om te kijken of dat het wel letters zijn
    if (inputPos.match(/[a-z]/i)) {
        
    }   else{
        alert('U moet wel een geldige letter invoeren')
        throw new Error("Something went badly wrong!");
    }
    // locatie letter vinden
    var pos = input.indexOf(inputPos) + 1;
    // printen resultaat
    res.innerHTML = 'De letter: ' + inputPos + ' is de ' + pos + 'e letter';
}

function opdrachtSubstring(){
    // functie ophalen waarde uitvoeren
    inputValue();
    //ophalen substring waardes
    var substringFrom = document.getElementById('substringVan').value;
    var substringTo = document.getElementById('substringTot').value;
    //opdracht specifieke validatie
    if (substringFrom > substringTo){
        alert('De eerste positie mag niet hoger zijn dan de tweede');
    }   else    {
        //letter positie ophalen
        var substringRes = input.substring((substringFrom -1), substringTo);
        //resultaat printen
        res.innerHTML = substringRes;
    }
}

function opdrachtReplace(){
    // functie ophalen waarde uitvoeren
    inputValue();
    globalValidation();
    //ophalen replace input waardes
    var letterOriginal = document.getElementById('letterOriginal').value;
    var letterReplace = document.getElementById('letterReplace').value;
    // validatie om te kijken of er iets is ingevuld
    if (letterOriginal == '' || letterOriginal == null || letterReplace == '' || letterReplace == null){
        alert('U moet wel een string invullen');
    }
    // validatie om te kijken of dat het wel letters zijn
    if (letterOriginal.match(/[a-z]/i) && letterReplace.match(/[a-z]/i))  {
        
    }   else{
        alert('U moet wel een geldige letter invoeren')
        throw new Error("Something went badly wrong!");
    }
    
    // replace uitwerken en valideren of dat het kan
    var replaceRes = input.replace(letterOriginal, letterReplace);
    if (replaceRes == input){
        alert('U moet wel een letter veranderen he')
        return;
    }
    //replace printen
    res.innerHTML = replaceRes;
}