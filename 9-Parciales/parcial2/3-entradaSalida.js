//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById('largo').value;
	ancho=document.getElementById('ancho').value;

	largo=parseFloat(largo);
	ancho=parseFloat(ancho);

	perimetro=largo*2+ancho*2;

	alambre=perimetro*6;

	alert("Se necesitaran: "+alambre+" metros de alambre.");


}

