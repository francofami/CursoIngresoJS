function Mostrar()
{
  var importe;
  var iva;

  importe = prompt("Ingrese el importe");

  importeFinal=importe*1.21; 

  /* El importe*1.21 sale de: 

  importe * 21/100 + importe --> eso me va a dar el importe final
  importe * 0.21 + importe --> simplifico el 21 con el 100
  importe*(0.21+1) --> saco factor común importe

 */

  document.getElementById('importeFinal').value = importeFinal;


}
