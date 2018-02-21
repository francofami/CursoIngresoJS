function Mostrar()
{
	var numero;
	var cantidadDivisores=0;

	numero=prompt("Ingrese un número: ");

	for(i=1;i<=numero;i++)
	{
		if(numero%i==0)
		{
			cantidadDivisores++;
		}
	}

	if(cantidadDivisores==2 || numero==1 || numero==-1)
	{
		alert("El numero es primo.");
	}
	else 
	{
		alert("El numero no es primo.");
	}

}//FIN DE LA FUNCIÓN