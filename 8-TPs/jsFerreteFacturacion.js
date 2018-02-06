/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;

	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	sumaproductos = parseFloat(precioUno) + parseFloat(precioDos) + parseFloat(precioTres);
	alert("La suma de los precios es de: "+sumaproductos);

}
function Promedio () 
{
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	sumaproductos = parseFloat(precioUno) + parseFloat(precioDos) + parseFloat(precioTres);
	promedio = parseFloat(sumaproductos) / 3;
	alert("El promedio es: "+promedio)
}
function PrecioFinal () 
{
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	sumaproductos = parseFloat(precioUno) + parseFloat(precioDos) + parseFloat(precioTres);
    iva = (parseFloat(sumaproductos) * 21) / 100;
    preciofinal = parseFloat(sumaproductos) + parseFloat(iva);
    alert("El precio final (más IVA 21%) es de: "+preciofinal);

}