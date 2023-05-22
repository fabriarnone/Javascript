const hub = {
    marca: 'NetMak',
    color: 'blanco y verde',
    puertos: 5,
    tipoPuerto: 'usb',
    precio: 5999.99,
    stock: 5
}
console.log(hub);
//vemos una propiedad del objeto
console.log(hub.color);
//modificamos una propiedad del objeto
hub.color = 'negro';

console.log(hub);
//eliminamos una propuedad
hub.garantia = '12 meses';
console.log(hub);
//mostrar mas de una propiedad
console.log(hub.marca + ' $' + hub.precio);
console.log(hub.id,hub.marca,hub.precio);

//otrforma de acceder a una propiedad de un objeto
hub['puertos']=3;
console.log(hub);

//CREAMOS PRIMERO EL MOLDE
function Alumno(nombre, apellido, legajo, curso){
    this.nombre = nombre;
    this.apellido = apellido;
    this.legajo = legajo;
    this.curso = curso;
}
//Aqui creamos una nueva instancia de objeto "alumno"
const alumno1 = new Alumno('Juan', '´Perez', '12345', '6A');
const alumno2 = new Alumno('Martina','Rodriguez','9876','3C');
//Mostramos el alumno 1
console.log(alumno1);
//Forzamos un alumno sin propuedad curso para ver como se ve
const alumno3 = new Alumno('Lucia','Ludueña', 5555);

//Metodos de strings
let oracion = 'Que hermosa NOCHE que tenemos'
console.log(oracion-toUpperCase());
console.log(toLowerCaso());
//Propiedad de String
console.log(oracion,length)

//CLASES
class Paciente {
    constructor(conmbre, altura, peso, edad){
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
    this.edad = edad;
}
calcularIMC(){
    let imc = this.peso/(this.altura*this.altura);
    alert("El indice de masa corporal de "+this.nombre+' es' + imc)
}
}

const p1 = new Paciente('Pablo', 1.8, 78, 30)
console.log(p1);
p1-calcularIMC();