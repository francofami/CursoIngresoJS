function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroRandom;

	numeroRandom=Math.floor((Math.random()*10)+1); 

	/*	numeroRandom=Math.floor(Math.random()*10) hace del 0 al 9
	  	numeroRandom=Math.floor((Math.random()*10)+1) hace del 1 al 10
	*/

	alert(numeroRandom);

}//FIN DE LA FUNCIÓN