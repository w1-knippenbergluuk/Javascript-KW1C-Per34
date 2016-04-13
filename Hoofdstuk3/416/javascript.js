var leerlingen = ["Mohammed", "Tolga", "Adem","Thomas", "Jean"];
document.write("<p>De eerste leerling is <strong>");
document.write(leerlingen[0] + "</strong></p>");

/* schrijf na deze regel je code van opdracht 1 */
document.write("<p>De laatste leerling is <strong>");
document.write(leerlingen[4] + "</strong></p>");
/* schrijf na deze regel je code van opdracht 2 */
document.write("<p>De tweede leerling is <strong>");
document.write(leerlingen[1] + "</strong></p>");
/* schrijf na deze regel je code van opdracht 3 */
document.write("<p>De voorlaatste leerling is <strong>");
document.write(leerlingen[leerlingen.length - 2] + "</strong></p>");
/* schrijf na deze regel je code van opdracht 4 */
leerlingen.pop();
document.write("<p>De laatste leerling is nu <strong>");
document.write(leerlingen[3] + "</strong></p>");
/* schrijf na deze regel je code van opdracht 5 */
leerlingen.unshift('Nick', 'Mike');
document.write("<p>De eerste leerling is nu <strong>");
document.write(leerlingen[0] + "</strong></p>");