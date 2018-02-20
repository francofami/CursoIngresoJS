function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;

	while(respuesta!='no')
	{
		contador++;
		numero = prompt("Ingrese número: ");

		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;
		}


		respuesta = prompt("Responda no para dejar de ingresar mas números");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN