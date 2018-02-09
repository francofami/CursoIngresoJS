function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt("Ingrese un numero:");
	numeroDos=prompt("Ingrese otro numero:");

	numeroUno=parseFloat(numeroUno);
	numeroDos=parseFloat(numeroDos);

	suma=numeroUno+numeroDos;

	if(suma>0)
	{
		document.write("El resultado es positivo");
	}
else
	if(suma<0)
	{
		document.write("El resultado es negativo");
	}
else
	document.write("El resultado es igual a 0");
}
