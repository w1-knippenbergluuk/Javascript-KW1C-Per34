// initialiseren van variabelen
var snelheid=0, vervoer='', weg='';
var totaleAfstand = 0;
//functie waarmee de waardes van de radio-buttons en de snelheid wordt opgehaald
function getWaardes() 
{
 snelheid = $('#snelheid').val();
 weg = $('input[name=weg]:checked').val();
 vervoer = $('input[name=vervoer]:checked').val();
}
//Dit is de functie die wordt aangeroepen als je op wijzig klikt
function wijzigSnelheid() {
 // De eerste stap is dat de waardes van de globale variabelen
 // snelheid, vervoer en weg worden gevuld met de ingevulde/gekozen waardes in het formulier
 getWaardes();
 alert('plek: ' + weg);
 alert('vervoer: ' + vervoer);
 alert('snelheid: ' + snelheid);
/* Schrijf hieronder je code */
    
    if(vervoer == "voet")
    {
        if(weg == 'stoep')
        {
            if(snelheid > 6)
            {
                meldStatus("Zo hard kun je niet lopen");
            }
            else
            {
                totaleAfstand += parseInt(snelheid);
                meldStatus("Goed bezig - je totale afstand tot nu toe is: " + totaleAfstand);
            }
        }
        else
        {
            meldStatus("Hier mag je helemaal niet lopen!");
        }        
    }
    // einde voetganger

    if(vervoer == "fiets")
    {
        if(weg == 'straat')
        {
            if(snelheid > 25)
            {
                meldStatus("Zo hard kun je niet fietsen");
            }
            else
            {
                totaleAfstand += parseInt(snelheid);
                meldStatus("Goed bezig - je totale afstand tot nu toe is: " + totaleAfstand);
            }
        }
        else
        {
            meldStatus("Hier mag je helemaal niet fietsen!");
        }        
    }
    // einde fietser

    if(vervoer == "auto")
    {
        if(weg == 'stoep')
        {
            meldStatus("Hier mag je helemaal niet rijden!");
        }
        else
        {
            if(weg == 'straat')
            {
                if(snelheid <= 50)
                {
                    totaleAfstand += parseInt(snelheid);
                    meldStatus("Goed bezig - je totale afstand tot nu toe is: " + totaleAfstand);
                }
                else
                {
                    meldStatus("Je rijdt te hard");
                }
            }
            if(weg == 'autoweg')
            {
                if(snelheid <= 100)
                {
                    totaleAfstand += parseInt(snelheid);
                    meldStatus("Goed bezig - je totale afstand tot nu toe is: " + totaleAfstand);
                }
                else
                {
                    meldStatus("Je rijdt te hard");
                }
            }
            if(weg == 'snelweg')
            {
                if(snelheid <= 120)
                {
                    totaleAfstand += parseInt(snelheid);
                    meldStatus("Goed bezig - je totale afstand tot nu toe is: " + totaleAfstand);
                }
                else
                {
                    meldStatus("Je rijdt te hard");
                }
            }
        }        
    }
    // einde auto
}
//Met deze functie kun je een melding in de pagina schrijven.( in de div met id=’status’ )
function meldStatus(tekst) {
 $('#status').html(tekst);
}