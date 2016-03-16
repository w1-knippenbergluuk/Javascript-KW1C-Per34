// start variablen aanmaken
var clicks;
var score = [0, 0, 0];

function nieuwSpel(){
    // weergeven klikbutton
    document.getElementById("clickButton").style.visibility = "visible";
    // startbutton weg toveren
    document.getElementById("startButton").style.visibility = "hidden";
    // 5 seconde timer aanzetten
    setTimeout(countdown, 5000);
    // clicks startwaarde op 0 zetten
    clicks = 0;
};

function klikCounter(){
    // iedere klik optellen
    clicks++;
}

function countdown(){
    // klik knop weg toveren
    document.getElementById("clickButton").style.visibility = "hidden";
    
    // if statements die kijken of dat je eerste, 2e, 3e of niet in de top zit. ze roepen ook de functie pushArray op
    if (clicks > score[0]){
        pushArray();
        document.getElementById("resultaat").innerHTML = "EERSTE PLEK HEUUUUUU!!!";

    }  else if(clicks > score[1]){
        pushArray();
        document.getElementById("resultaat").innerHTML = "tweede, kan beter he.";

    }   else if(clicks > score[2]){
        pushArray();
        document.getElementById("resultaat").innerHTML = "derde.... probeer je uberhaubt wel?";
        
    }   else{
        document.getElementById("resultaat").innerHTML = "jammer, u heeft met " + clicks +  " kliks de top 3 niet gehaald";
    }
    // na 1 seconde startReset functie oproepen zodat je weer opnieuw kan beginnen
    setTimeout(startReset, 1000);
}

function pushArray(){
    //kliks pushen naar array
    score.push(clicks);
    //array sorteren
    score.sort(function(a, b){return b-a});
    // getallen buiten de top 3 verwijderen
    score.splice(3, 3);
    // printen van score
    document.getElementById("first").innerHTML = score[0];
    document.getElementById("second").innerHTML = score[1];
    document.getElementById("third").innerHTML = score[2];
}

function startReset(){
    // start button zichtbaar maken
    document.getElementById("startButton").style.visibility = "visible";
}