var day = 6;
var age = 66;
var cost;

if(day == 5){
    document.write("Het park is gesloten");
}   else
    {
        if (age < 3) 
        {
            if (day <= 4) 
            {
                cost = 20
            }
            else 
            {
                cost = 22;
            }
        }
        else {
            if (age < 18) 
            {
                if (day <= 4) 
                {
                    cost = 22
                }
                else {
                    cost = 24;
                }
            }
            else {
                if (age < 65) 
                {
                    if (day <= 4) 
                    {
                        cost = 24
                    }
                    else 
                    {
                        cost = 26;
                    }
                }
                else
                {
                    if (day <= 4) 
                    {
                        cost = 22
                    }
                    else 
                    {
                        cost = 24;
                    }
                }
            }
        }
    document.write("De prijs is: " + cost + " euro");
}