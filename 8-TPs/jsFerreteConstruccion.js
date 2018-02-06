/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	alambrelargo=parseFloat(largo)*6;
	alambreancho=parseFloat(ancho)*6;
	alambretotal=parseFloat(alambrelargo)+parseFloat(alambreancho);
	alert(alambretotal);
}
function Circulo () 
{
	var radio;
	radio=document.getElementById('Radio').value;
	perimetro = 2 * Math.PI * parseFloat(radio) * 3;
	alert(perimetro);
}
function Materiales () 
{
	var largo;
	var ancho;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	area = parseFloat(largo)*parseFloat(ancho);

	cemento=parseFloat(area)*2;
	cal=parseFloat(area)*3;

	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.")

}