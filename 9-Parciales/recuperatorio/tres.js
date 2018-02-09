function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno=document.getElementById('precioUno').value;
	precioDos=document.getElementById('precioDos').value;
	precioTres=document.getElementById('precioTres').value;

	precioUno=parseFloat(precioUno);
	precioDos=parseFloat(precioDos);
	precioTres=parseFloat(precioTres);

	suma=precioUno+precioDos+precioTres;

	promedio=suma/3;

	alert("La suma de los precios es: "+suma);
	alert("El promedio de los precios es: "+promedio);
}
