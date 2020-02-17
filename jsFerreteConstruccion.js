/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    tAlambre = ((ancho * 2) + (largo * 2)) * 3;
    alert(tAlambre);
}
function Circulo () 
{
    radio = parseInt(document.getElementById("Radio").value);

    pTotal = 2 * radio * Math.PI;   

    alert(pTotal);
    
}
function Materiales () 
{
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    
    bArena = largo * 2;
    bCal = ancho * 3;  

    alert("Bolsas de arena: " + bArena + " bolsas de cal " + bCal);
}