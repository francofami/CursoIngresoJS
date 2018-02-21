function Mostrar()
{

	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	contador=-10;
	iteraciones=9;

	for(;;)
	{
		
		document.write(contador+"<br>");

		if((contador%2)==0 && contador!=0)
		{
			contadorPares++;
		}
		else if(!(contador%2==0))
		{
			contadorImpares++;
		}
		else
		{
			contadorCeros++;
		}

		if(contador<0)
		{
			contadorNegativos++;
		}
		if(contador>0)
		{
			contadorPositivos++;
		}

		if(contador==iteraciones)
		{
			break;
		}



		contador++;

	}

		document.write("Hay: "+contadorPares+" numero/s par/es. <br>"+"Hay: "
			+contadorImpares+" numero/s impar/es. <br>"+"Hay "+contadorCeros+" cero/s. <br>"+
			"Hay "+contadorPositivos+" numero/s positivo/s <br>"+"Hay "+contadorNegativos+" numero/s negativo/s."
			);

	/*for(i=0; i<10;i++)
	{
		document.write(i+"<br>");
	}

	//En el momento que se sale del for automaticamente hace la suma del ++

	document.write(i+"<br>");*/
}