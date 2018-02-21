function Mostrar()
{
	var numero;
	var contadorPares=0;

	numero=prompt("Ingrese un numero,");

	for(i=1;i<=numero;i++)
	{
		if(i%2==0)
		{
			document.write(i+"<br>");
			contadorPares++;

		}
	}

	document.write("Hay: "+contadorPares+" numeros pares.")


}//FIN DE LA FUNCIÓN