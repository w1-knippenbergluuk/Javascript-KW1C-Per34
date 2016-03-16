// declareren en initialiseren van globale variabelen
var autos = ["vroem vroem", "broem broem", "miep miep", 4, 5];
console.log(autos);

// wijzigen array element
autos[2] = "test";
console.log(autos);

// toevoegen element array
//einde
autos.push('Suzukie', "BWM");
console.log(autos);

//begin
autos.unshift('smart');

var letter;

var autos = ["Volvo", "Saab", "BMW", "Smart", "Skoda", "Tesla", "Toyota", "Barry"];

function checkAuto(){
    document.getElementById('resultaat').innerHTML = "";
    //waarde letter variablen ophalen en omzetten naar hoofdletter
    letter = document.getElementById('letter').value;
    letter = letter.toUpperCase();

    for(i=0; i <= autos.length-1;i++){

        if(letter == autos[i].charAt(0)){
            document.getElementById('resultaat').innerHTML += autos[i] + "<br />";
        }   
    }
}