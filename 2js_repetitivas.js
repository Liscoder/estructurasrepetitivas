//**********PREGUNTA #1
function	factorial(){ 
var numero= parseInt(prompt("Ingrese el numero"));

var producto=1;
for (i=1;i<=numero; i++) {
	producto=producto*i;
}

document.write("el factorial de un numero es: "+ producto);
}
