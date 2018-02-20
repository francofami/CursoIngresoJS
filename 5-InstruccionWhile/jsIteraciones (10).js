function Mostrar()
{

	var contador=0;
	var numero;
	var cantidadPositivos;
	var cantidadNegativos;
	//declarar contadores y variables 
	
	var respuesta="si";
	var negativos;
	var positivos;
	var ceros=0;
	var pares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	while(respuesta!="no")
	{
		numero= prompt("Ingrese un número.");

		respuesta=prompt("Responda no para dejar de ingresar mas numeros");

		if(numero<0)
		{
			negativos+=numero;
			cantidadNegativos++;
		}
		else if(numero>0)
		{
			positivos+=numero;
			cantidadPositivos++;
		}
		else
		{
			ceros++;
		}
		if(numero%2==0)
		{
			pares++;
		}
	}

	promedioPositivos=positivos/cantidadPositivos;
	promedioNegativos=negativos/cantidadNegativos;

	diferencia=positivos-negativos;

	document.write("")


}//FIN DE LA FUNCIÓN