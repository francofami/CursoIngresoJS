function Mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 9.");

	while(numero<0 || numero>9 || numero==null)
	{
		alert("Error.");
		numero = prompt("ingrese un número entre 0 y 9.");
	}

	alert("Bien!!!");


}//FIN DE LA FUNCIÓN