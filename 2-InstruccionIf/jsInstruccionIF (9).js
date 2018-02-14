function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroRandom;

	numeroRandom=Math.floor((Math.random()*10)+1); 

	/*	numeroRandom=Math.floor(Math.random()*10) hace del 0 al 9
	  	numeroRandom=Math.floor((Math.random()*10)+1) hace del 1 al 10

	Explicación:

	Math.random() lo que hace es generar un número aleatorio entre 0,000... y 0,999...
	
	Math.floor() actúa como un parseInt, de hecho podría poner parseInt() y sería lo mismo.
	Por lo tanto Math.floor() le saca los números que se encuentran despues de la coma, asique
	daría un número aleatorio que puede ser 0 o 1.

	Por otra parte si yo multiplico al Math.random() por ejemplo por 10, lo que estoy haciendo
	es correr la coma un lugar para la derecha generandome un numero aleatorio entre 0 y 9. 
	Es por eso que le tengo que sumar 1 para que me genere entre 0 y 10.


	*/

	alert(numeroRandom);

}//FIN DE LA FUNCIÓN