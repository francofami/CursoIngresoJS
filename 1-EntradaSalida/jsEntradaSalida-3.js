/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/*alert("esto anda");
	document.getElementById('elNombre'); //document.g -> tab -> Shift + I //Aca accedi al elemento html de tipo input*/

	var nombre;
	nombre=document.getElementById('elNombre').value; //Si sale en pantalla object HTML... es porque me falto el .value al final
	alert(nombre);

}


