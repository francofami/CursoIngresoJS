function Mostrar()
{

	var numero;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var respuesta="si";
	var negativos=0;
	var positivos=0;
	var ceros=0;
	var pares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	while(respuesta!="no")
	{
		numero= prompt("Ingrese un número.");


		if(numero<0)
		{
			numero=parseInt(numero);
			negativos+=numero;
			cantidadNegativos++;
		}
		else if(numero>0)
		{
			numero=parseInt(numero);
			positivos= positivos+numero;
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

		respuesta=prompt("Responda no para dejar de ingresar mas numeros");
	}



	promedioPositivos=positivos/cantidadPositivos;
	promedioNegativos=negativos/cantidadNegativos;

	diferencia=positivos-negativos;

	document.write("La suma de los negativos es de: "+negativos+"<br>"+"La suma de los positivos es de: "+positivos+"<br>"+
		"Hay "+cantidadPositivos+" numeros positivos. <br>"+"Hay "+cantidadNegativos+" numeros negativos. <br>"+"Hay "+ceros+" ceros. <br>"
		+"Hay "+pares+" numeros pares. <br>"+"El promedio de los numeros positivos es: "+promedioPositivos+"<br>"+
		"El promedio de los numeros negativos es: "+promedioNegativos+"<br>"+"La diferencia entre positivos y negativos es: "+diferencia);


}//FIN DE LA FUNCIÓN