//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multiplicar;
	var resta;

	numeroUno=prompt("Ingrese un numero:");
	numeroDos=prompt("Ingrese otro numero:");

	numeroUno=parseFloat(numeroUno);
	numeroDos=parseFloat(numeroDos);

//Recordar poner los parseFloat antes del primer if
	

	if(numeroUno==numeroDos)
	{
		multiplicar=numeroUno*numeroDos;
		document.write(multiplicar);
	}
else
	if(numeroUno>numeroDos)
	{
		resta=numeroUno-numeroDos;
		document.write(resta);
	}
else
	{
		suma=numeroUno+numeroDos;
		document.write(suma);
	}
}

