//Ciclos: Hacer que vuelva hacia arriba 
//for, while o do while
//Ciclos por conteo Repiten un bloque un numero de veces especifica
//Ciclos Condicionales repiten mientras una condicion sea verdadera.
//FOR - Ciclop por conteo
/*
for(let i=1; i<=3; i++){
    console.log('conteo: '+i)
}
//i++ es para que se vaya agregando uno, la variable siempre tiene q ser i o j
console.log('El conteo ha finalizado');

//Ejemplos multiplicacion.
let ingresarNumero = parseInt(prompt('Ingresar Numero'));
for (let i=1; i<= 10;i++){
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero + "X"  + i + "=" + resultado);
}

//Ejemplos Turnos
for (let i = 1; i <= 3; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    console.log(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

//Break - corta el ciclo - quiebra el ciclo
for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if(i == 3){
        break;
    }
    alert(i);
}

//Ejemplo de Break
let numeroAAdivinar = 3;
let numeroUsuario;

for(let i=1; i<=10; i++){
    numeroUsuario = parseInt(prompt('Adivina cual es el numero que pense'))
    //SI ADIVINA
    
    if (numeroUsuario == numeroAAdivinar){
        alert('Ganaste 🙌');
        break;
    }
    //SI NO ADIVINA
    alert ('No es el numero ' +numeroUsuario)
}

//Continue - no corta el ciclo, saltea algun numero en el ciclo
for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    alert(i);
}
*/

//Ciclos por condicion WHILE
//Mientras este esa condicion sigue cicleando
//Este puede no ejecutarse nunca.

/*
let deporte = prompt("Ingresa un deporte que te guste (s-para salir)");
    while(deporte != "s"){
    if(deporte == 'tenis'){
        console.log('Me encanta el tenis');
    }else if(deporte =='futbol'){
        console.log('Messi es un capo');
    }else{
        console.log('Escribiste ' +deporte);
    }

    deporte = prompt('Ingresa o deporte que te guste (s-para salir)');

}
*/
//EJEMPLO CON MAS SENTIDO

let codigoProducto = prompt('Ingresa el codigo del producto para saber detalles del mismo(0-psalir');

while (codigoProducto != '0'){
    if(codigoProducto == '0983'){
        console.log('Cuaderno A4 marca Gloria $2000');
    }else if(codigoProducto =='1212'){
        console.log('Lapicera Bic $800')
    }else if(codigoProducto == '3456'){
        console.log('folio A4 precio $4000')
 }
                
codigoProducto = prompt('Ingresa el codigo del producto para saber detalles del mismo(0-psalir');
}

//DO WHILE DIAPO 20 - Al menos una vez se va a mostrar
let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero))

//SWITCH es un condicional, igual que IF
//Tiene una sintaxis diferente al IF
//Se justifica si tengo muchos casos para no usar muchos else if

let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}















