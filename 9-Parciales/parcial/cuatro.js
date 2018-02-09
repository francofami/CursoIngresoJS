function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var resta;

	numeroUno = prompt("Ingrese un numero: ");
	numeroDos = prompt("Ingrese otro numero: ");

	numeroUno=parseFloat(numeroUno);
	numeroDos=parseFloat(numeroDos);

	/* Es necesario pasar los numeros a parseFloat/Int antes de arrancar con los if y no despues del ultimo else
	porque de esa manera no me funcíonó. */

	if(numeroUno==numeroDos)
	{
		multiplicacion=numeroUno*numeroDos;
		document.write(multiplicacion);
	}
else
	if(numeroUno>numeroDos)
	{
		resta = numeroUno-numeroDos;
		document.write(resta);
	}
else
	
	suma=numeroUno+numeroDos;
	document.write(suma);
}
