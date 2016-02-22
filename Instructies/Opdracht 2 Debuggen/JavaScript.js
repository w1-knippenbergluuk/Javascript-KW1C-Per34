/*
var aantal = 10;
var product = "bioscoopkaarten";
var prijs = 7.5;
var totaal = aantal * prijs;

for (i = 0; aantal <= 20; i++) {
    totaal = aantal * prijs;
    console.log(aantal + " " + product + " kosten: " + " " + totaal);
    
    aantal++;
    prijs += 0.5;
}   
*/
var var1 = true + false;
var var2 = 2 + 4 * 2 - 1;
var var3 = '2' + 2 * 3;
var var4 = true + 2;
var var5 = '2' - 1;
var var6 = 2 * ((2 + 2 * 2) - 2);
var var7 = 2 == 2;
var var8 = Math.round(Math.tan(45) % 2);
var var9 = 'String'.indexOf('s');
var var10 = null;

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);
console.log(typeof var6);
console.log(typeof var7);
console.log(typeof var8);
console.log(typeof var9);
console.log(typeof var10);

console.log( var1);
console.log( var2);
console.log( var3);
console.log( var4);
console.log( var5);
console.log( var6);
console.log( var7);
console.log( var8);
console.log( var9);
console.log( var10);

var aantal = 1;
var prijs = 32;
var totPrijs = aantal * prijs;
 
while (aantal < 10)
{
	aantal--;
	totPrijs += (prijs*aantal) + aantal;
	aantal += 2;
}
