console.log('hola chicos');
let nombre = 'Lautaro';
if (nombre == 'Lautaro')
{console.log('Bienvenido Lauti ! Note vayas a la heladera')}
let idioma = prompt('Ingresa tu idioma\n1-Español\n2-Ingles');
//el \n sirve para hacer un salto de linea
if(idioma == '1') {alert('Buenas noches')}
if(idioma == '2') {alert('Good night')};

let colorFavorito = prompt('ingresa tu color favorito')
if (colorFavorito == 'rojo') {console.log('Mi color favorito tambien es el rojo')}
else{console.log('Que pena, mi color favorito es rojo')};
//El else funciona si es falso

//else if da muchas posibilidades
//sirve para elegir varias condiciones relacionadas a una misma variable

let insumo = prompt('Desea ver precio de: \n1-Aro de Luz\n2-Teclado Gamer\n3-Mouse genius')
if (insumo == '1') {alert ('Aro de luz marca Xiam garantia 6 meses $5000')} 
else if (insumo == '2')  {alert ('Teclado Gamer garantia 12 meses $79000')}
else if (insumo == '3') {alert ('Mouse gamer garantia 6 meses $5000')}
else {alert('codigo invalido')}

let totalDelPedido = parseFloat(prompt('ingrese el monto en pesos del total de su pedido'));
let envioSinCargo = (totalDelPedido > 20000); //falso
console.log('El usuario tiene envio sin cargo:' +envioSinCargo);

if (totalDelPedido > 20000){envioSinCargo = true}
else (envioSinCargo = false)

//== se fija solo por valor 1 == '1' TRUE
//=== Evalua por tipo que sea exactamente igual pero uno es un number el otro es un string entonces no es igual
//=== 1 ==== '1' FALSE pero '1' === '1' TRUE
//'rojo' != 'Rojo' TRUE - != significa "es distinto".
// !== ESTRICTAMENTE distinto, funciona igual que el triple =

let equipoFutbol = prompt('Cual fue el equipo de futbol que se inicio Lionel Messi')
let edadMessi =prompt('Cual es la edad actual de Lionel Messi')

if ((equipoFutbol == 'Newells') && (edadMessi == '35')) {alert ('Ganaste una camseta')}
else {alert('Una o mas respuestas erroneas')}
//&& significa que ambas respuestas deen coincidir para que ganes la camistea

let banda = prompt('Cual fue la banda pop que en 2022 realizo 10 recitales en River Plate');
if ((banda == 'coldplay') || (banda =='Coldplay') || (banda == 'COLDPLAY'));
alert('Excelente');

// || Los dos palitos parados son para indicar difrentes opciones o posibilidades.
// https://elcodigoascii.com.ar en esa paginae stan todos los codigos del teclado











































