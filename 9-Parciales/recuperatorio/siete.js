function Mostrar()
{
	var edad;
	var sexo;
	var promedio;
	var contadorVarones;
	var respuesta="si";

	while(respuesta!="no")
	{
		edad=prompt("Ingrese edad: ");
		
		while(edad<0 || edad>100 || edad=="" || isNaN(edad))
		{
			edad=prompt("¡Error! Ingrese edad (entre 0 y 100): ");
		}

		edad=prompt("Ingrese sexo (f o m): ");
		
		while(sexo!="f" && sexo !="m")
		{
			edad=prompt("¡Error! Ingrese sexo (f o m): ");
		}

		
	}
}
