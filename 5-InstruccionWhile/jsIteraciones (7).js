function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=='si')
	{
		numero = prompt("Ingrese número.");
		numero=parseFloat(numero);
		acumulador+=numero; // Es lo mismo que poner acumulador = acumulador + numero
		contador++;
		respuesta = prompt("Responda si para ingresar otro número");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN