function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var resta;
	var suma; 

	numeroUno = prompt("Ingrese un numero: ");
	numeroDos = prompt("Ingrese otro numero: ");

	numeroUno=parseFloat(numeroUno);
	numeroDos=parseFloat(numeroDos);

	/* SIEMPRE que quiera pasar a float o a int hacerlo antes de los if */


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
	{
	suma=numeroUno+numeroDos;
	document.write(suma);
	}

/* Cuando le asigno mas de una línea a una función, las líneas deben estar dentro de {} */

}
