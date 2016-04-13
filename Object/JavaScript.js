//Declareren en initialiseren van objecten
var Luuk = 
{
    voornaam: "Luuk",
    achternaam: "Knippenberg",
    leeftijd: 19

};

var Karis = 
{
    voornaam: "Harry",
    achternaam: "Karis",
    leeftijd: 45

};

var Ralph = 
{
    voornaam: "Ralph",
    achternaam: "Gijsbrechts",
    leeftijd: 26
}

var Damir = 
{
    voornaam: "Damir",
    achternaam: "Mesanovic",
    leeftijd: 20
}

function toevoegen(vnaam, anaam, ltijd){
    lijst();
    contacten[contacten.length] =
    {
        voornaam: vnaam,
        achternaam: anaam,
        leeftijd: ltijd
    }
}

function toevoegenObject(){
    var voor = document.getElementById("voornaam").value;
    var ach = document.getElementById("achternaam").value;
    var leef = parseInt(document.getElementById("leeftijd").value);

    toevoegen(voor, ach, leef);
}


var contacten = [Luuk, Karis, Ralph, Damir];
var checker;

function printPersoon(persoon){
    document.getElementById("resultaat").innerHTML = persoon.voornaam + ' ' + persoon.achternaam + " <br/>";
}
//alert(Luuk.achternaam);

//printPersoon(Karis);

//laat gegevens van alle personen nzien
function lijst()
{
    var contactLength = contacten.length;

    for(i=0; i<contactLength; i++){
        checkAge(contacten[i]);

        if (checker == true){
            printPersoon(contacten[i]);
        }
        
    }

}

function checkAge(persoon){
    if(persoon.leeftijd < 21){
        alert(persoon.voornaam + ' is ' + persoon.leeftijd + ' jaar oud en moet minimaal 21 zijn.');
        checker = false;
    }   else{
    checker = true;
    }
}

//lijst();