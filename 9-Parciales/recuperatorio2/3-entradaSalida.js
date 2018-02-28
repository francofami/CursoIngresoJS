//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var metrosAlambreAncho;
	var metrosAlambreLargo;
	var metrosAlambreTotal

	ancho=document.getElementById('ancho').value;
	metrosAlambreAncho=parseFloat(metrosAlambreAncho);

	largo=document.getElementById('largo').value; //En el documento HTML le borré donde decía readonly en la parte del ID para poder cargar el largo en la pantalla.
	metrosAlambreLargo=parseFloat(metrosAlambreLargo);

	metrosAlambreAncho = ancho*12;
	metrosAlambreLargo=largo*12;

	metrosAlambreTotal=metrosAlambreLargo+metrosAlambreAncho;

	alert("Se necesitarán "+metrosAlambreTotal+" metros de alambre.");

}


