function Mostrar()
{
	var largo;
	var ancho;
	var alambreLargo;
	var alambreAncho;
	var alambrePerimetro;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;

	alambreLargo = largo*6;
	alambreAncho = ancho*6;

	alambreLargo = parseFloat(alambreLargo);
	alambreAncho = parseFloat(alambreAncho);

	alambrePerimetro = alambreLargo+alambreAncho;

	alert("Se necesitarán "+alambrePerimetro+" metros de alambre.");

}
