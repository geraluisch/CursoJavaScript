/*
1.  Escribir una función a la que se pasa como parámetro un número entero y 
    devuelve como resultado un texto que indica si el número es par o impar.
    Mostrar por pantalla el resultado devuelto por la función. 
*/

function esParImpar(num){

    return (num % 2) === 0 ? 'Par.' : 'Impar.'

}

//número par
console.log('Número :',esParImpar(2));

//número impar
console.log('Número :',esParImpar(7));


/*
2.  Según este string "abcdefghijklmnñopqrstuvwxyz", hacer una función que recibe 
    un parámetro (un caracter), y la función me debe devolver en qué posición en 
    la cadena del string se encuentra el caracter entregado como argumento:

    Ejemplo:

    posición('e') // -> 4   
*/

function posicion(caracter){
    var string = "abcdefghijklmnñopqrstuvwxyz";

    return string.indexOf(caracter);
}

//posición
console.log(posicion('e'));

/*
3.  Hacer una función a la que le paso un precio, y este me devuelva el precio con
    impuesto de 0.19%. Si yo ingreso 1000 a la función, me debería retornar con el
    formato "El precio con impuesto es de 1190"
*/

function precioConIva(precio){
    return 'El precio con impuesto es de '.concat(precio*1.19);
}

//precio con iva
console.log(precioConIva(1000));

/*
4.  Hacer un closure con contexto de "una persona tira un dado". Es decir, yo le 
    entrego un nombre, por ejemplo:

    var dadoJulio = nuevoDado('julio')

    Y que la respuesta de dadoJulio() sea:

    dadoJulio() -> "Julio tiró un dado y salió 6"
    dadoJulio() -> "Julio tiró un dado y salió 3"
    dadoJulio() -> "Julio tiró un dado y salió 5"

    Por lo tanto, la respuesta del closure debe ser aleatoria y el dado debe ser de 
    6 caras (osea del 1 al 6).
*/

function nuevoDado(jugador){
    return function(){
      return jugador.concat(' tiró un dado y salió '.concat(Math.floor(Math.random() * 6)+1));
    }
}

var dadoLuis = nuevoDado('Luis');
  