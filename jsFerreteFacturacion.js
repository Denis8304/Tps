/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    pUno = parseInt(document.getElementById("PrecioUno").value);
    pDos = parseInt(document.getElementById("PrecioDos").value);
    pTres = parseInt(document.getElementById("PrecioTres").value);
    rSuma = (pUno + pDos + pTres);

    alert(rSuma);
}
function Promedio () 
{
	pUno = parseInt(document.getElementById("PrecioUno").value);
    pDos = parseInt(document.getElementById("PrecioDos").value);
    pTres = parseInt(document.getElementById("PrecioTres").value);
    rProm = (pUno + pDos + pTres) / 3;

    alert(rProm);
}
function PrecioFinal () 
{
	pUno = parseInt(document.getElementById("PrecioUno").value);
    pDos = parseInt(document.getElementById("PrecioDos").value);
    pTres = parseInt(document.getElementById("PrecioTres").value);
    rSuma = (pUno + pDos + pTres);
    rFinal = (rSuma * 12 / 100) + rSuma; 

    alert(rFinal);
}