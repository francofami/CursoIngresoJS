/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;


	suma=parseInt(numeroUno)+parseInt(numeroDos);

	alert("la suma es "+suma);
}

