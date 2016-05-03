//**********PREGUNTA #4
function estado(){ 
var suma=0;
var clientes= parseInt(prompt("Ingrese el numero de clientes"));
for(i=1;i<=clientes;i++){
	numero_cuenta= parseInt(prompt("Ingrese el numero de cuenta del cliente"+i));
	nombre_cliente=prompt("Ingrese el nombre de cliente del cliente"+i);
	estado_cuenta= parseInt(prompt("Ingrese el estado de cuenta del cliente"+i));
	if(numero_cuenta<0 || nombre_cliente<0 || estado_cuenta<0 ){
		throw (new Error('The message'));
	}
	if(estado_cuenta>0){
		document.write("<br>"+"El estado de cuenta "+i+" ACREEDOR");
		suma=suma+estado_cuenta;
	}else{
		if(estado_cuenta<0){
			document.write("El estado de cuenta "+ i +" ES DEUDOR");
		}
		else{
			document.write("<br>"+"EL estado de cuenta "+ i + "Es nulo");
		}
	}
		
		
}
		
document.write("El total de saldo acreedor es: "+ suma);
}
