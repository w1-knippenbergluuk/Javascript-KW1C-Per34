function bereken(){
    // variablen aanmaken
    var getalElement = document.getElementById('opleiding');
    var opleiding = getalElement.value;
    
    var getalElement = document.getElementById('jaar');
    var jaar = getalElement.value;

    var HBO1 = 0.5 ;
    var HBO2 = 2 ;


    // controle die kijkt of dat je mbo of hbo doet, als je mbo doet gaat die naar de functie MBOcalculate
    // if statement die bekijkt wat voor functie niveau programmeur je bent
    if (opleiding == "MBO") {
        MBOCalculate();
     }	else{
	    
        if (jaar <= HBO1) {
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een junior programmeur bent';
        }   
        else{
            if (jaar <= HBO2) {
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een medior programmeur bent';
            }   
        else{
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een senior programmeur bent';
    }
    }
	}  
	    
}    

//herhaling van bovenstaande functie alleen dan gericht op MBO
function MBOCalculate(){
    var getalElement = document.getElementById('jaar');
    var jaar = getalElement.value;

    var getalElement = document.getElementById('opleiding');
    var opleiding = getalElement.value;

    var MBO1 = 1;
    var MBO2 = 3;

    if (jaar <= MBO1){
        document.getElementById('resultaat');
        resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een junior programmeur bent';
    } else{
        if (jaar <= MBO2){
            document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een medior programmeur bent';
        }
    else{
        document.getElementById('resultaat');
            resultaat.innerHTML = 'U heeft een ' + opleiding + ' diploma en doet al '+ jaar + ' jaar ' + '. Dat wil zeggen dat u een senior programmeur bent';
    }
    }
}
 //   alert("debug");
