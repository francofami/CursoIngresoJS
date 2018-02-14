function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;

	nota=Math.floor((Math.random()*10)+1);

	if(nota==9 || nota==10)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(nota>=4 && nota<9)
		{
			alert("APROBÓ");
		}	
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
	
	console.info(nota); // Esto lo agregué para poder ver en la consola que nota se sacó cada uno.

}//FIN DE LA FUNCIÓN