/* function enviarBienvenida() {
    let nombre = prompt ('Ingresa tu nombre');
    alert ("Bienvenido "+nombre);
    
}
enviarBienvenida(); */

/*for(let i=0;i<4;i++){enviarBienvenida();
console.log('vuelta'+i)
}*/
/* function enviarBienvenida2(nombre){
    alert('Bienvenido/a' +nombre)
}

enviarBienvenida2('Juanita');
enviarBienvenida2('Juan Carlos');
let nombre = prompt('Ingresa tu nombre')
enviarBienvenida2(nombre) */
//ALT + SHIFT + A - Comentar todo lo seleccionado

/* function calcularIva(precio){
    let iva = precio * 0.21
    console.log('El iva de $'+precio+' es $'+iva)
}

calcularIva(100);
calcularIva(2345);

let valorProducto = parseFloat(prompt('Ingresa el valor de tu producto en $'))
calcularIva(valorProducto); */
/* 

function autenticarUsuario(user, password){
    if((user =='pepe') & (password='12345')){
        return true;
    } else{
        return false;
    }
}

let usuario =prompt('ingresa tu nombre de usuario');
let contrasenia = prompt('ingresa la contrasena '+usuario)

let autenticado = autenticarUsuario(usuario,contrsenia);
if(autenticado){
    alert('Bienvenido nuevamente '+usuario);
} else{
    alert('Usuario o contrasena erroneos');
}
 */
//VARIABLES LOCALES Y GLOBALES

/* let pais = 'Argentina';
//console.log(pais);
function cambiarPais(){
    pais = 'Chile';
    console.log(pais);
    //variable local tiene ambito solo de las llaves de la funcion
    let ciudad = 'Santiago'
    console.log(ciudad);
    return ciudad;
}

let laCiudad = cambiarPais();
//error porque ciudad tiene ambito local
console.log(ciudad);

function imprimirCiudad(){
    console.log(laCiudad)
}

imprimirCiudad(); */

//FUNCIONES ANONIMAS Y FUNCIONES FLECHA

//Anonima = calcula el cuadrado de un numero
const cuadrado = function (numero){
    return numero * numero
}
console.log(cuadrado(2));

/* function calcularCuadrado(numero){
    let cuadrado = numero * numero;
    return cuadrado;
}
console.log(calcularCuadrado(8))
 */

//FUNCION FLECHA - calcula el area de un rectangulo
