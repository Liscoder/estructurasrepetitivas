//**********PREGUNTA #10
function censo(){ 
	var cantidad_personas=parseInt(prompt("Ingrese el numero de personas en el censo: "));
	var cantidad_varones=0;
	var cantidad_mujeres=0;
	var varones_16=0;
	for(i=1;i<=cantidad_personas;i++){
		var dni = parseInt(prompt("Ingrese su numero de documento: "));
		var edad =parseInt(prompt("Ingrese la edad: "));
		var sexo = (prompt("Ingrese el sexo F o M"));
		if(sexo=="M"){
			cantidad_varones=cantidad_varones+1;
			if(edad>=16&&edad<=65){
				varones_16=varones_16+1;
			}
		}
		if(sexo == "F"){
			cantidad_mujeres=cantidad_mujeres+1;
		}

	}
	document.write("<br>"+"La cantidad de personas censadas es: "+cantidad_personas);
	document.write("<br>"+"La cantidad de varones es: "+cantidad_varones);

}