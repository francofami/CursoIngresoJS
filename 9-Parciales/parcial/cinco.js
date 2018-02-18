function Mostrar()
{
	var diaSemana;

	diaSemana=prompt("Ingrese día de la semana:");

	switch(diaSemana)
	{
		case "Sábado":
		case "Domingo":

		alert("es fin de semana");
		break;

		default:

		alert("a trabajar !!!");
	}
}
