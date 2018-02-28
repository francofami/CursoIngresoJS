function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno=document.getElementById('precioUno').value;
	precioUno=parseFloat(precioUno);

	precioDos=document.getElementById('precioDos').value;
	precioDos=parseFloat(precioDos);

	precioTres=document.getElementById('precioTres').value;
	precioTres=parseFloat(precioTres);	

	suma=precioUno+precioDos+precioTres;

	promedio=suma/3;

	alert("La suma de los precios es: "+suma);
	alert("El promedio de los precios es: "+promedio);
}
