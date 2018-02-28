//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var respuesta="si";
	var numero;
	var contadorPares=0;
	var promedio;
	var acumuladorNumeros=0;
	var contador=0;
	var maximo;
	var minimo;	

	while(respuesta!="no")
	{
		contador++;

		numero=prompt("Ingrese numero positivo: ");
		while(numero<=0 || numero=="" || isNaN(numero))
		{
			numero=prompt("¡Error! Ingrese numero positivo: ");
		}

		numero=parseFloat(numero);

		acumuladorNumeros+=numero;

		if(numero%2==0 && numero!=0)
		{
			contadorPares++;
		}

		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else if(maximo<numero)
		{
			maximo=numero;
		}
		if(minimo>numero)
		{
			minimo=numero;
		}

		respuesta=prompt("Ingrese no para dejar de cargar números:");
	}

	promedio=acumuladorNumeros/contador;

	document.write("Hay "+contadorPares+" número/s par/es. <br> El promedio de todos los números ingresados es: "+promedio+"<br> La suma de todos los números es: "+acumuladorNumeros+"<br> El número máximo es: "+maximo+"<br> El número mínimo es: "+minimo);
}

