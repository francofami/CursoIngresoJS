function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	var respuesta='si';

	while(respuesta=='si')
	{
		numero = prompt("Ingrese número");

		if(numero>0)
		{
			numero=parseInt(numero);
			positivo+=numero;
		}
		else if(numero<0)
		{
			negativo*=numero;
		}

		respuesta = prompt("Responda si para ingresar otro número.");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN