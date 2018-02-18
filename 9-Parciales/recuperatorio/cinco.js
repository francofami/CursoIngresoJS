function Mostrar()
{
	var mes;

	mes=prompt("Ingrese un mes");

	switch(mes)
	{
		case "Diciembre":
			alert("Se vienen las fiestas");
			break;
		case "Enero":
			alert("comienza el año");
			break;
		default:
			alert("no es enero, ni diciembre");
	}
}
