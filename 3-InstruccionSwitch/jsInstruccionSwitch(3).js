function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño)
{
	case "Febrero":
		alert("Este mes no tiene más de 29 días.");
		break;
	default: //Esto sería un equivalente al else
		alert("Este mes tiene 30 o más días");
}

}//FIN DE LA FUNCIÓN