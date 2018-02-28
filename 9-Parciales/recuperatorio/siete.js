function Mostrar()
{
	var edad;
	var sexo;
	var promedio;
	var contadorVarones=0;
	var acumuladorEdad=0;
	var contador=0;
	var edadMin;

	while(contador<3)
	{
		contador++;

		edad=prompt("Ingrese edad: ");
		
		while(edad<0 || edad>100 || edad=="" || isNaN(edad))
		{
			edad=prompt("¡Error! Ingrese edad (entre 0 y 100): ");
		}

		sexo=prompt("Ingrese sexo (f o m): ");
		
		while(sexo!="f" && sexo !="m")
		{
			sexo=prompt("¡Error! Ingrese sexo (f o m): ");
		}

		edad=parseInt(edad);

		acumuladorEdad+=edad;

		if(sexo=="m" && edad>=20)
		{
			contadorVarones++;
		}

		if(contador==1)
		{
			edadMin=edad;
		}
		else if(edadMin>edad)
		{
			edadMin=edad;
		}
	}

	promedio=acumuladorEdad/contador;

	alert("El promedio de edad es: "+promedio+". La edad más baja es: "+edadMin+". La cantidad de varones que su edad es mayor o igual a 20 es: "+contadorVarones+".");
}
