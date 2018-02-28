//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var contador=0;
	var maximo;
	var minimo;

	while(contador<7)
	{
		contador++;

		importe=prompt("Ingrese importe: ");

		while(importe<=0 || importe=="" || isNaN(importe))
		{
			importe=prompt("¡Error! Ingrese importe: ");
		}

		if(contador==1)
		{
			maximo=importe;
			minimo=importe;
		}
		else if(maximo<importe)
		{
			maximo=importe;
		}
		if(minimo>importe)
		{
			minimo=importe;
		}
	}

	alert("El mayor importe es "+maximo+" y el menor "+minimo);	
}

