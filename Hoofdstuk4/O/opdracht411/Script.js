

function programmeurNiveau()
{
    //variabelen declareren
    var opleidingsNiveau;
    var ervaring;
    var progNiveau

    //variabelen ophalen uit form
    opleidingsNiveau = document.getElementById("opleidingsNiveau").value;
    ervaring = document.getElementById("ervaring").value;

    // alertje voor controle
    alert(opleidingsNiveau + "    " + ervaring);

    // if statements
    if(opleidingsNiveau == "MBO")
    {
        if(ervaring <= 1 && ervaring > 0)
        {
            progNiveau = "Junior";
            document.getElementById("resultaat").innerHTML = "Je hebt " + opleidingsNiveau + " gedaan en je hebt " + ervaring + " jaar ervaring. Je bent een " + progNiveau + " programmeur";
        }
        else if(ervaring <= 3 && ervaring > 1)
        {
            progNiveau = "Medior";
            document.getElementById("resultaat").innerHTML = "Je hebt " + opleidingsNiveau + " gedaan en je hebt " + ervaring + " jaar ervaring. Je bent een " + progNiveau + " programmeur";
        }
        else if(ervaring > 3)
        {
            progNiveau = "Senior";
            document.getElementById("resultaat").innerHTML = "Je hebt " + opleidingsNiveau + " gedaan en je hebt " + ervaring + " jaar ervaring. Je bent een " + progNiveau + " programmeur";
        }
        else if(ervaring <= 0)
        {
            progNiveau = "Je hebt nog geen ervaring";
            document.getElementById("resultaat").innerHTML = progNiveau
        }
        else
        {
            document.getElementById("resultaat").innerHTML = "Iets klopt er niet";
        }
    }
    else if(opleidingsNiveau == "HBO")
    {
        if(ervaring <= 0.5 && ervaring > 0)
        {
            progNiveau = "Junior";
            document.getElementById("resultaat").innerHTML = "Je hebt " + opleidingsNiveau + " gedaan en je hebt " + ervaring + " jaar ervaring. Je bent een " + progNiveau + " programmeur";
        }
        else if(ervaring > 0.5 && ervaring <= 2)
        {
            progNiveau = "Medior";
            document.getElementById("resultaat").innerHTML = "Je hebt " + opleidingsNiveau + " gedaan en je hebt " + ervaring + " jaar ervaring. Je bent een " + progNiveau + " programmeur";
        }
        else if(ervaring > 2)
        {
            progNiveau = "Senior";
            document.getElementById("resultaat").innerHTML = "Je hebt " + opleidingsNiveau + " gedaan en je hebt " + ervaring + " jaar ervaring. Je bent een " + progNiveau + " programmeur";
        }
        else if(ervaring <= 0)
        {
            progNiveau = "Je hebt nog geen ervaring";
            document.getElementById("resultaat").innerHTML = progNiveau;
        }
        else
        {
            document.getElementById("resultaat").innerHTML = "Iets klopt er niet";
        }
    }
    else
    {
        document.getElementById("resultaat").innerHTML = "Iets klopt er niet";
    }
}