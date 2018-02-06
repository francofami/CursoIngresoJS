/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre=prompt("Ingrese su nombre: ");
	document.getElementById('elNombre').value=nombre; 
	//Al poner la variable al final va a hacer que lo que este en ella aparezca en la parte de la izquierda del igual.


}

