function Mostrar()
{

var sexo;
sexo = prompt("ingrese f ó m .");

while(sexo!="f" && sexo!="m")
{
	alert("Error.");
	sexo = prompt("ingrese f ó m .");
}

switch(sexo)
{
	case "f":
		sexo="Femenino";
		document.getElementById('Sexo').value=sexo;
		break;
	case "m":
		sexo="Masculino";
		document.getElementById('Sexo').value=sexo;
}




}//FIN DE LA FUNCIÓN