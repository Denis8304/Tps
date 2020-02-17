/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cLamparas = parseInt(document.getElementById("Cantidad").value);
     var Marca = document.getElementById("Marca").value;
     //var precio = document.getElementById("precioDescuento").value;  
     
     
     if(cLamparas >= 6)
     {
         var tLamparas = 35 * cLamparas;
         var tDescuento = tLamparas * 50 /100;
         
         document.getElementById("precioDescuento").value = tLamparas - tDescuento;
         //precio = tLamparas - tDescuento;
     }
     else
     {
         switch(cLamparas)
         {
             case 5:
                 if(Marca == "ArgentinaLuz")
                 {
                     tLamparas = 35 * cLamparas;
                     tDescuento = tLamparas * 40 /100;
                     document.getElementById("precioDescuento").value = tLamparas - tDescuento;
                 }
                 else
                 {
                    tLamparas = 35 * cLamparas;
                    tDescuento = tLamparas * 30 /100;
                    document.getElementById("precioDescuento").value = tLamparas - tDescuento;
                 }

            case 4:
                if(Marca == "ArgentinaLuz" || Marca == "FelipeLamparas")
                {
                    tLamparas = 35 * cLamparas;
                    tDescuento = tLamparas * 25 /100;
                    document.getElementById("precioDescuento").value = tLamparas - tDescuento;
                }
                else
                {
                    tLamparas = 35 * cLamparas;
                    tDescuento = tLamparas * 20 /100;
                    document.getElementById("precioDescuento").value = tLamparas - tDescuento;
                }
            
            case 3:
                if(Marca ==  "ArgentinaLuz")
                {
                    tLamparas = 35 * cLamparas;
                    tDescuento = tLamparas * 15 /100;
                    document.getElementById("precioDescuento").value = tLamparas - tDescuento;
                }
                else if(Marca == "FelipeLamparas")
                {
                    tLamparas = 35 * cLamparas;
                    tDescuento = tLamparas * 10 /100;
                    document.getElementById("precioDescuento").value = tLamparas - tDescuento;
                }
                else
                {
                    tLamparas = 35 * cLamparas;
                    tDescuento = tLamparas * 5 /100;
                    document.getElementById("precioDescuento").value = tLamparas - tDescuento;
                }
         }
    }
    var precio = parseInt(document.getElementById("precioDescuento").value);

    if(precio > 120)
         {
             iibb = precio * 10 / 100;
             precio = precio + (precio * 10 / 100);

             alert("Usted pago " + precio + ", siendo " + iibb + " el impuesto que se pagó");
         }
         
     
}
