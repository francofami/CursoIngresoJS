function Mostrar()
{
	var numero;
	var cantidadDivisores=0;

	numero=prompt("Ingrese numero:");

	for(i=1;i<=numero;i++)
	{
		if(numero%i==0)
		{
			document.write(i+"<br>");
			cantidadDivisores++;
		}
	}

	document.write("Hay "+cantidadDivisores+" divisor/es.");
}//FIN DE LA FUNCIÓN