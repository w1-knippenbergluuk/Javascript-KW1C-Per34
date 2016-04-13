var a = true;
var b = false;
var c = [1,1,2,3,4];
var d = 'oefentoets'.substr(1,4);
var e = 'hallo'.replace('e','a');
console.log(a != b);
console.log(c[1]===c[2]);

console.log(d.length == 3 && d == 'oefe');

console.log(e == 'hello' && c[1] < 2);

console.log(c.length > 4 || 5 < 4);