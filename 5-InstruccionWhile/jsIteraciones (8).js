function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var contadorPositivos=0;
	var contadorNegativos=0;

	var respuesta='si';

	while(respuesta=='si')
	{
		numero = prompt("Ingrese número");

		if(numero>0)
		{
			numero=parseInt(numero);
			positivo+=numero;
			contadorPositivos++;
		}
		else if(numero<0)
		{
			negativo*=numero;
			contadorNegativos++;
		}

		respuesta = prompt("Responda si para ingresar otro número.");
	}

	if(contadorPositivos==0)
	{
		positivo="No se ingresaron positivos"
	}

	if(contadorNegativos==0)
	{
		negativo="No se ingresaron negativos"
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN