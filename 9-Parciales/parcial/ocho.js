function Mostrar()
{

	var nota;
	var promedio;
	var sumaNotas=0;
	var nombre;
	var respuesta="si";
	var contador=0;
	var sexo;
	var contadorMachos=0;
	var contadorHembras=0;
	var contadorMachosDesaproba2=0;
	var notaMaxima;
	var nombreMejorNota;
	var promedioNotaMujeres;
	var acumuladorNotasMujeres=0;
	var edad;
	var menorEdad;
	var sexoMenorEdad;
	var acumuladorEdadesAprobados=0;
	var contadorEdadesAprobados=0;
	var promedioEdadesAprobados;
	var contadorNotasPares=0;
	var contadorNotasImpares=0;

	while(respuesta!="no")
	{
		contador++;

		sexo=prompt("Ingrese sexo m/f");

		while(sexo!="m" && sexo!="f")
		{
			sexo=prompt("¡Error! Ingrese sexo m/f");
		}

		if(sexo=="m")
		{
			contadorMachos++;
		}
		if(sexo=="f")
		{
			contadorHembras++;
		}
		
		edad=prompt("Ingrese edad");
		while(edad<0 || edad>100 || isNaN(edad)) // isNaN sirve para poner como condicion de que sea un numero
		{
			edad=prompt("¡Error! Ingrese edad entre 0 y 100.");
		}

		if(contador==1)
		{
			menorEdad=edad;
			sexoMenorEdad=sexo;
		}
		else if(menorEdad>edad)
		{
			menorEdad=edad;
			sexoMenorEdad=sexo;
		}

		nombre=prompt("Ingrese nombre:");
		nota=prompt("Ingrese nota:");
		
		while(nota>10 || nota<0 || isNaN(nota)) // isNaN sirve para poner como condicion de que sea un numero
		{
			nota=prompt("¡Error! Ingrese nota entre 0 y 10.");
		}

		nota=parseInt(nota);

		sumaNotas+=nota;

		if(sexo=="m" && nota<4)
		{
			contadorMachosDesaproba2++;
		}

		if(contador==1)
		{
			notaMaxima=nota;
			nombreMejorNota=nombre;
		}
		else if (notaMaxima<nota)
		{
			notaMaxima=nota;
			nombreMejorNota=nombre;
		}

		if(sexo=="f")
		{
			acumuladorNotasMujeres+=nota;
		}

		if(nota>=4)
		{
			edad=parseInt(edad);
			acumuladorEdadesAprobados+=edad;
			contadorEdadesAprobados++;
		}

		if(nota%2==0 && nota!=0)
		{
			contadorNotasPares++;
		}

		if(nota%2!=0 && nota!=0)
		{
			contadorNotasImpares++;
		}

		respuesta=prompt("Escriba no para dejar de cargar nombres.");
	}

	promedio=sumaNotas/contador;
	promedioNotaMujeres=acumuladorNotasMujeres/contadorHembras;
	promedioEdadesAprobados=acumuladorEdadesAprobados/contadorEdadesAprobados;

	document.write("Se ingresaron: "+contador+" alumno/s. <br>");
	document.write("El promedio de notas es: "+promedio+"<br>");
	document.write("Hay "+contadorMachos+" hombre/s. <br>");
	document.write("Hay "+contadorHembras+" mujer/es. <br>");
	document.write("Hay "+contadorMachosDesaproba2+" hombre/s desaprobado/s. <br>");
	document.write(nombreMejorNota+" sacó la mejor nota. <br>");
	document.write("El promedio de notas de las mujeres es: "+promedioNotaMujeres+"<br>");
	document.write("El sexo de la persona mas jóven es "+sexoMenorEdad+"<br>");
	document.write("El promedio de las edades de los aprobados es: "+promedioEdadesAprobados+"<br>");
	document.write("Hay "+contadorNotasPares+" nota/s par/es. <br>");
	document.write("Hay "+contadorNotasImpares+" nota/s impar/es. <br>");
}
