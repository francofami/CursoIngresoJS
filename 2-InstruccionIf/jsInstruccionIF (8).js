function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;

	//console.log("Hola"); Esto es para mostrar un mensaje por consola cuando apreto el botón en la pagina html

	//console.info("La variable es", estadoCivil); Esto nos muestra información sobre la variable (va a servir mas adelante para array)

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad<18 && estadoCivil!="Soltero")
		{
			console.log("NO HACER NADA");
		}

/* Como me pide que no haga nada, muestro un mensaje en la consola que diga
no hacer nada */

	if(edad>=18 && estadoCivil=="Soltero")
		{
			alert("Es soltero y no es menor");
		}


}//FIN DE LA FUNCIÓN