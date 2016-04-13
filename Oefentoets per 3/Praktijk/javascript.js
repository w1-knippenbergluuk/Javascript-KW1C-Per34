var radioSubValue;

function getRadioValue(){
    var elements = document.getElementsByName('subscribtion');
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            radioSubValue = elements[i].value;
        }
    }
}

function gekkeFunctieG()  {
    
    getRadioValue();
    getRadioValue();
    alert(radioSubValue);
    if (radioSubValue == "Y"){
        document.getElementById("selectTypeCard").style.visibility = "hidden";
        document.getElementById("selectTypeCardRadio").style.visibility = "hidden";
    } else{
        document.getElementById("selectTypeCard").style.visibility = "visible";
        document.getElementById("selectTypeCardRadio").style.visibility = "visible";
    }
    
}

console.log(typeof radioSubValue);


















































var radioSubValue2
function getRadioValue2(){
    var waarde = document.getElementsByName("subscribtion");

    for(i=0, x = waarde.length; i<x; i++){
        if(waarde[i].checked){
            alert('test');
            radioSubValue2 = waarde[i].value;
            
        }
    }
}