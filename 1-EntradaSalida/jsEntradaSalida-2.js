/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;
	nombre=prompt("Ingrese nombre","natalia natalia"); 
	//Las primeras "" tiran un texto en pantalla y las segundas hacen que aparezca un valor por defecto en el cuadro de ingreso de texto
	alert("Su nombre es: "+nombre); //El + es para concatenar, seria un equivalente al << en C
	
	//Esto es un comentario de una linea
    
	/*
	esto es un bloque
	alert("nombre");
	nombre="Franco";
	alert(nombre);
    */

	//var person = prompt("Please enter your name", "Harry Potter");
}

