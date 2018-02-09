//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multiplicar;
	var resta;
	var suma;

	numeroUno=prompt("Ingrese un numero:");
	numeroDos=prompt("Ingrese otro numero:");

	numeroUno=parseFloat(numeroUno);
	numeroDos=parseFloat(numeroDos);


	if(numeroUno==numeroDos)
	{
		multiplicar=numeroUno*numeroDos;
		document.write("El producto entre los numeros es igual a : "+multiplicar);
	}
else
	if(numeroUno>numeroDos)
	{
		resta=numeroUno-numeroDos;
		document.write("La resta entre los numeros es igual a : "+resta);
	}
else
	{
		suma=numeroUno+numeroDos;
		document.write("La suma entre los numeros es igual a : "+suma);		
	}

}

