//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var acumuladorNota=0;
	var promedio;
	var menorNota;
	var contadorVarones=0;

	while(contador<6)
	{
		contador++;

		nota=prompt("Ingrese nota:");
		while(nota<0 || nota>10 || isNaN(nota) || nota=="")
		{
			nota=prompt("¡Error! Ingrese nota:");
		}

		nota=parseFloat(nota);

		acumuladorNota+=nota;

		sexo=prompt("Ingrese sexo f/m:");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("¡Error! Ingrese sexo f/m:");
		}

		if(sexo=="m" && nota>=6)
		{
			contadorVarones++;
		}

		if(contador==1)
		{
			menorNota=nota;
		}
		else if(menorNota>nota)
		{
			menorNota=nota;
		}
	}

	promedio=acumuladorNota/contador;

	alert("El promedio de las notas totales es: "+promedio+"<br> La nota más baja es: "+menorNota+"<br> La cantidad de varones que su nota fue mayor o igual a 6 es: "+contadorVarones);

}

