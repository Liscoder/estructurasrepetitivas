//**********PREGUNTA #5
function repetir(){ 
	var palabra=prompt("Ingresa la palabra");
	var numero=parseInt(prompt("Ingrese el numero de veces que quieres repetir"));
	var union=[];
for(i=1;i<=numero;i++){
	union=union+palabra;
}
	document.write("El texto es: "+union);
}
