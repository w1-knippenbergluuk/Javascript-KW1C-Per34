//globale variable lijst voor een array met getallen
var lijst = [22,33,9];
var som = 0;
var gem;
/*
*  functie getGetal haalt het getal op in de div met id getal
*  Deze functie heeft geen parameters
*  @return een geheel getal 
*/
function getGetal() {
		return parseInt($('#getal').val());
}

/*
*  De functie add() voegt het ingevulde getal in de de div met id= 'getal' toe aan de globale variabele lijst
*  Als de ingevulde wwaarde geen getal is dan gebeurt er niets.
*  Als het wel een getal is dan wordt het getal toegevoegd aan de variabele lijst en wordt de lijst geprint
*  in de span met id='lijst' 
*  geen parameters
*  geen return waardes
*/
function add() {
	getal = getGetal();
	if (isNaN(getal)) {
		return;
	}
	else {			
		lijst.push(getal);
		printLijst();
	}
}
/* de functie printLijst() print alle getallen uit de variabele lijst in de div met id=lijst
*  geen parameters
*  geen return waardes
*/
function printLijst() {
	var strLijst = '', del='';
	
	for (var i=0; i<lijst.length; i++) {
		strLijst =  strLijst + del + lijst[i];
        del = ',';		
	}
	
	printInHtml( 'lijst', strLijst );
}

/* De functie printInHtml print een tekst in de html tag met id=plek
*  @param1 plek is een string met de id van de html waar de tekst moet worden toegevoegd
*  @param2 tekst is een string die wordt gezet in de html tag met id=tekst
*/ 
function printInHtml(plek, tekst) {
	$('#'+plek).html(tekst);
}


function countLijst() {
    //lijst.length --> lengte opvrage variabel
    document.getElementById("resultaat").innerHTML = lijst.length;
}

function sortNumber(a, b)
{
    // numeriek sorteren
    return a - b;
}
function countDistinct() {
    // nummers netjes sorteren zodat je goed kon tellen
    lijst.sort(sortNumber);
    var count = 1;
    var results = "";
    for(i = 0; i < lijst.length; i++)
    {
        // als bijv lijst[0] == lijst[1]
        if(lijst[i] == lijst[i + 1])
        {
            count += 1;
        }
        // en dan opslaan
        else
        {
            results += "<br>" + lijst[i] + " --> " + count + " keer";
            count = 1;
        }
    }
    document.getElementById("resultaat").innerHTML = results;
}

function deleteFirst() {
    lijst.shift();
    document.getElementById("resultaat").innerHTML = lijst;
    printLijst();
}

function deleteLast() {
    lijst.pop();
    document.getElementById("resultaat").innerHTML = lijst;
    printLijst();
}

function sum() {
    
    for(i = 0; i < lijst.length; i++)
    {
        som += lijst[i];
        console.log(som);
    }
    gem = som / lijst.length;
    console.log(gem);
    document.getElementById("resultaat").innerHTML = som;
    som = 0;
}

function average() {
    document.getElementById("resultaat").innerHTML = gem;
}

$(document).ready(function() {
	printLijst();
});

