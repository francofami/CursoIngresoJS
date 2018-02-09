function Mostrar()
{
  var importe;
  var descuento;
  var importeFinal;

  importe=prompt("Ingrese el importe: ");

  descuento=importe*25/100;

  importeFinal=importe-descuento;
    

  /* En este caso hice un paso para calcular el valor del descuento, tambien podría hacerlo de esta manera:

	importeFinal=importe*0.75;

	importe*0.75 sale de:

	importeFinal = importe - importe*25/100 --> Aca le resto el 25% al importe
	importeFinal = importe - importe*0.25   --> Simplifico el 25 con el 100
	importeFinal = importe*(1-0.25)         --> Saco factor común importe
	importeFinal = importe*0.75

  */

  document.getElementById('importeFinal').value=importeFinal;
}
