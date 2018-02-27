function Mostrar()
{
	var peso;
	var contador=1;
	var masPesado;
	var menosPesado;
	var contenedorMasPesado;
	var contenedorMenosPesado;

	while(contador<=5)
	{
		peso=prompt("Ingrese peso: ");
	
		while(peso<=0)
		{
			peso=prompt("¡Error! Ingrese peso (mayor a 0): ");
		}

		if(contador==1)
		{
			masPesado=peso;
			menosPesado=peso;
			contenedorMasPesado=contador;
			contenedorMenosPesado=contador;
		}

		else if(masPesado<peso)
		{
			masPesado=peso;
			contenedorMasPesado=contador;
		}

		if(menosPesado>peso)
		{
			menosPesado=peso;
			contenedorMenosPesado=contador;
		}

		contador++;

	}

	alert("El mas pesado fue el contenedor: "+contenedorMasPesado);
	alert("El menos pesado fue el contenedor: "+contenedorMenosPesado);


}
