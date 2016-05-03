//**********PREGUNTA #6
function multiplos(){ 
	var suma=0;

for(i=11;i<=3000;i++){
	if(i%11==0){
		suma=suma+i;
	}
}
	document.write("La suma de los multiplos de 11 es: "+suma);
}
