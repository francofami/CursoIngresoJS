function Mostrar()
{
	var numero;
	var respuesta="si";
	var contadorPares=0;
	var contador=0;
	var acumulador=0;
	var promedio;
	var maximo;
	var minimo;

	while(respuesta!="no")
	{
		contador++;

		numero=prompt("Ingrese numero positivo:");
		
		while(numero<=0 || numero=="" || isNaN(numero))
		{
			numero=prompt("¡Error! Ingrese numero positivo:");
		}

		numero=parseInt(numero);

		acumulador+=numero;

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

		respuesta=prompt("Ingrese no para dejar de cargar numeros");
	}

	promedio=acumulador/contador;

	document.write("Hay "+contadorPares+" numeros pares. <br> El promedio de todos los números ingresados es "+promedio+"<br> La suma de todos los números es: "+acumulador+"<br> El número máximo es: "+maximo+"<br> El número mínimo es "+minimo);
	
}
