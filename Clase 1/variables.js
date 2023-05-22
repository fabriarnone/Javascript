// declaracion de variables
let personaje;

// asignando un valor a la variable
personaje = 'Darth Vader';
//personaje tiene un dato de tipo STRING (Cadena de texto)

//Declaración y asignación en la misma linea
let driode = 'C3PO';

//Reasignación
driode = 'BB8';

// asignación de un dato numérico
let fecha = 1977; //no lo pongo entre comillas y al ser digitos en un dato numerico

// constantes
const PI = 3.14;

let cantidaduno= 3;
let cantidaddos = 5;

//calcular total - suma
let cantidadtotal = cantidaduno + cantidaddos;

//Años que se estreno la primera parte
let cantidadanios = 2023 - fecha;

//Calcular dolares a pesos
let dolares = 100;
let cotizacion = 470;

let mifortunaenpesos = dolares * cotizacion;

//Tengo 24 manzanas para dividir entre 3 personas
let manzanas = 24;
let personas = 3;

let cadaUnoLleva = manzanas / personas;

//Concatenar textos
let nombre = 'Pepe'
let apellido = 'Gomez'

let nombreCompleto = nombre + ' ' + apellido;

//salida de datos por consola
console.log('Saludos desde el archivo variable.js');

console.log('El usuario activo es: '+nombreCompleto)
console.log('La cantidad total sumada = '+cantidadtotal)
console.log('La primera peli de Star Wars se estreno hace '+cantidadanios+' Años')
console.log('Mi fortuna en pesos es $'+mifortunaenpesos)
console.log('Cada persona se lleva '+cadaUnoLleva+' manzanas')

//Salida de datos por alert
alert('Bienvenido '+nombreCompleto)
alert('La fortuna de la profe '+mifortunaenpesos+' pesos')

//Entrada de datos del usuario
nombreCompleto = prompt('Ingrese su nombre porfavor');//Fabricito
alert('Te damos la bienvenida '+nombreCompleto);

//ejercicio con numeros

let precioProducto = parseFloat(prompt('Ingrese el precio del producto que quiere consultar'));
let precioConIva = precioProducto * 1.21;
console.log(precioConIva);

//parceFloat convierte un String a numero decimal.
//parceInt convierte un string a numero entero