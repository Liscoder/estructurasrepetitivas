//**********PREGUNTA #7
function lista(){ 
	var suma1=0;
	var suma2=0;

	for(i=1;i<=2;i++){
		alert("carga la lista numero" + i);
		for(j=1;j<=3;j++){
			var numeros= parseInt(prompt("Ingrese el numero "+j+" de la lista"+i));
			if(i==1){
				suma1=suma1+numeros;
			}
			if(i==2){
				suma2=suma2+numeros;
			}
		}
	}
	if(suma1>suma2){
		document.write("La Lista1 es mayor");
	}else{
		if(suma2>suma1){
			document.write("La Lista2 es mayor");
		}else{
			document.write("Las listas son iguales");
		}
	}

}
