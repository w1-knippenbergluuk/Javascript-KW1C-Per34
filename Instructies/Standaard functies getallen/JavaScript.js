var getal1 = 1;
var getal2 = '2';
var getal3 = getal1 + getal2;
var getal4 = parseInt(getal1 + getal2);
var getal5 = getal1 + parseInt(getal2);

console.log('waarde: ' + getal3 + ' datatype: ' + typeof getal3);
console.log('waarde: ' + getal4 + ' datatype: ' + typeof getal4);
console.log('waarde: ' + getal5 + ' datatype: ' + typeof getal5);

var getal6 = '2.4e99999999';
var getal7 = parseInt(getal6);
var getal8 = parseFloat(getal6);

console.log('waarde: ' + getal7 + ' datatype: ' + typeof getal7);
console.log('waarde: to ' + getal8 + ' and beyond! datatype: ' + typeof getal8);