//**********PREGUNTA #3
function operador(){ 

var numero1= parseInt(prompt("Ingrese el 1 numero"));
var numero2= parseInt(prompt("Ingrese el 2 numero"));
var suma=0;
var resta=0;
var producto=0;
if(numero1>numero2){
	var suma=numero1+numero2;
	var resta=numero1-numero2;
	document.write("La suma es: "+suma);
	document.write("La resta es: "+resta);
}
else{
	if(numero1==numero2){
		alert("Estos numeros son iguales");
	}
	else{
		producto=numero1*numero2;
		document.write("El producto de estos numeros es: "+producto);

	}
}

}
