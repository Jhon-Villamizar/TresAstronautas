/* Parte I - Prueba lógica: */

/* ¿Cómo encontraría usted el número faltante dado un arreglo no ordenado que
contenga una secuencia de enteros del 1 al 100, y le falte un número? */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var faltante;
numbers.map((numero, index) => {
    if (!faltante && numero != index + 1) {
        faltante = index + 1;
    }
});
console.log('faltante', faltante);

/* ¿Cómo encontraría usted el primer número que aparezca duplicado en un arreglo de
enteros desordenados? */
var numbers = [1, 2, 3, 4, 5, 5];
var result;
numbers.forEach(element => {
    var x = numbers.filter(number => number == element);
    if (!result && x.length >= 2) {
        result = x[0];
    }
});
console.log("resultado", result);

/* ¿Cómo reversaría usted el orden de un arreglo de enteros? */
var numbers = [1, 2, 3, 4, 5];
const reversed = numbers.reverse();
console.log('reversed:', reversed);

/* ¿Cómo intercambiaría usted el valor de dos variables que contienen enteros, sin
utilizar una tercera variable? */
var a = 30;
var b = 40;
a = a + b;
b = a - b;
a = a - b;
console.log('a = ' + a + '; b = ' + b);

/* ¿Cómo verificaría usted que una cadena de texto es palindrome? */
var texto = "holi";
var resultado = texto.split("").reverse().join("") == texto ? 'true' : 'false';
console.log(resultado);

/* ¿Cómo reversaría usted una cadena de texto utilizando recursión? */
const reverseString = (str) => {
    return str ? reverseString(str.substr(1)) + str[0] : str;
};
console.log(reverseString('hello world!'));

/* ¿Cómo contaría usted el número de consonantes en una cadena de texto? */
var texto = 'holi';
var array = texto.split('');
var result = array.filter(word => word != 'a' && word != 'e' && word != 'i' && word != 'o' && word != 'u').length;
console.log(result)


/* Parte II - Prueba conceptual: */

/*1. Si se quiere emplear el proceso TDD (Test Driven Development) en la empresa,
seleccione la opción que mejor represente el flujo de trabajo de los métodos TDD. 
    Respuesta:
    a. Requisitos → Arquitectura de software → Desarrollo de software → Pruebas funcionales → Soporte

2. ¿Qué tipo de lenguaje es Ruby, y en qué se diferencia con Java?
    Respuesta:
    Ruby es un lenguaje interpretado por lo cual no es necesario compilarce para ser ejecutados, a diferencia de JAVA que debe ser compilado para poder ser ejecutado.

3. ¿Qué son los microservicios?
    Respuesta:
    Los microservicios son una arquitectura que se basa en crear pequeños servicios independientes que pueden formar entre ellos servicios mucho mas grandes.

4. ¿Por qué serían beneficiosos los microservicios para una organización?
    Respuesta:
    los microservicios ayudan a que se reduzcan los llamados a un solo servicio ya que los llamados se dividirian en diferentes servicios, lo cual permite un mejor tiempo de respuesta, asi como una mayor sostenibilidad y soporte al enfocar posibles cambios al servicio especifico sin afectar los demas.

5. ¿Por qué no serían beneficiosos los microservicios para una organización?
    Respuesta:
    en cuanto a la construccion individual de servicios tomaria un poco mas tiempo ademas de conocimiento de cada servicio para poder brindar un buen soporte.

6. ¿Cuál es la diferencia entre SOA y Microservicios?
    Respuesta:
    la diferencia mas significativa es que en el patron de arquitectura SOA los servicios comparten llamados ya que se basa en un servicio general mientras los microservicios independiza cada servicio haciendolo mas veloz.

7. ¿Por qué podría ser más compleja la comunicación por una red en una arquitectura
por microservicios?
    Respuesta:
    podria ser mas compleja por el consumo de diferentes servicios de forma individual el cual debe ser vigilado de manera sincronica en cuanto a las interacciones de los servicios y su seguridad

8. Proponga un método de comunicación para una arquitectura por microservicios.
    Respuesta:
    propondria el metodo api rest que utiliza los protocolos http y https para hacer llamados a los servidores esperando su respuesta.
9. ¿Qué es y cómo funciona Docker?
    Respuesta:
    Es una arquitectura usada para el despliegue de servicios basada en contenedores donde se pueden almacenar diferentes servicios con su respectivo espacio en memoria guardandolo como una imagen y ayudandonos a manejar dicha imagen y las imagenes que necesitemos
    
10. ¿Qué es y cómo funciona Kubernetes?
    Respuesta:
    Es una arquitectura en la cual se alberga una gran cantidad de contenedores y sicroniza su funcionalidad.
    */

/* Parte III - Prueba en Javascript (Entregar el código):*/

/*1. En un salón se tienen las notas de 14 alumnos; de los cuales se desea saber cuál
fue el promedio de todas las notas, cuál fue la nota mayor y la nota menor. Así como
la cantidad de aprobados en el curso (Para Aprobar la asignatura se requiere de una
nota mayor o igual a 3.0). */

alumno = [{
        nombre: 'Juan',
        nota: 2
    }, {
        nombre: 'Pedro',
        nota: 5
    }, {
        nombre: 'Laura',
        nota: 1
    }, {
        nombre: 'Maria',
        nota: 5
    }, {
        nombre: 'Fernando',
        nota: 2
    }, {
        nombre: 'Juan',
        nota: 2
    }, {
        nombre: 'Pedro',
        nota: 5
    }, {
        nombre: 'Laura',
        nota: 1
    }, {
        nombre: 'Maria',
        nota: 5
    }, {
        nombre: 'Fernando',
        nota: 5
    }, {
        nombre: 'Juan',
        nota: 2
    }, {
        nombre: 'Pedro',
        nota: 5
    }, {
        nombre: 'Laura',
        nota: 2
    }, {
        nombre: 'Maria',
        nota: 4
    }
];
var menor = 100;
var mayor = 0;
var total = 0;
var aprobo = 0;
var reprobo = 0;
alumno.forEach(element => {
    if (element.nota >= 3) {
        aprobo += 1;
    } else {
        reprobo += 1;
    }
    if (menor > element.nota) {
        menor = element.nota
    }
    if (mayor < element.nota) {
        mayor = element.nota
    }
    total += element.nota;
});
var prom = total / alumno.length;
console.log('menor', menor);
console.log('mayor', mayor);
console.log('total', total);
console.log('prom', prom);
console.log('aprobaron', aprobo);
console.log('resprobaron', reprobo);


/* 2. Simular 20 tiradas de dos dados y contar las veces que entre los dos suman 10.*/

for (let index = 0; index <= 10; index++) {
    var dado1 = Math.floor(Math.random() * (+7 - +1)) + +1;
    var dado2 = Math.floor(Math.random() * (+7 - +1)) + +1;
    var total = dado1+dado2;
    console.log(dado1,dado2);
    if (total >= 10 ) {
        console.log("Mayor",total);
    }
}

