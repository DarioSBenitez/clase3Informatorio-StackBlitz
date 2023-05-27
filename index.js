//Segun retorne algo o no se clasifican en funciones o procedimientos.
//si no retornan nada son:
//Procedimientos

function mostrar(string) {
  console.log(string);
}
mostrar("Hola como estas!");

//si retornan son:
//Funciones

function suma(a,b) {
  return a + b;
}
console.log(suma(2,5));
mostrar(suma(2,5));

const resultado = suma(2,5);
mostrar(resultado);

//Otra forma de declararlas es con las:
//Arrow functions

//Defino un array
var colores = ["rojo", "verde", "amarillo"];

//Utilizando funcion comun
colores.forEach( function(color) {
  console.log(color);
})

//Utilizando arrow function
colores.forEach( (color) => {
  console.log(color)
})

//Se puede simplificar mas aún
colores.forEach( color => {
  console.log(color);
})

//EJERCICIO
/*
1. Definir una funcion "addFavoriteMovie()", que reciba  un parametro llamado "movieName".
2. Si lo que se recibió no es un string, mostrar por consola un error indicando que solo se acepran cadenas de texto.
3. Si el nombre de la película que se recibe no contiene la palabra `El`o `la`, agregarlo a un array llamado "favoritesMovies".
4. Definir una funcion llamada "showFavoritesMovies" que no reciba parametros.
5. "showFavoritesMovies" debería mostrar por consola un mensaje similar a este: "" */

const favoritesMovies = [];

function addFavoriteMovie(movieName) {
  if (typeof movieName !== 'string') {
    console.log("Error, solo se aceptan cadenas de textos!");
    //console.error("Error, solo se aceptan cadenas de textos!");
    //console.warn("Error, solo se aceptan cadenas de textos!");
    //throw new Error('solo se aceptan cadenas de textos!')
  } else {
    console.log(movieName);
  }

  if (!(movieName.indexOf('El' ) || movieName.indexOf('La' ))) {
    favoritesMovies.push(movieName);
  }
}

function showmovie() {
  console.log(`existen ${favoritesMovies.length} en la lista.`);
  for ( let i of favoritesMovies) {
    consol.log(i);
  }
}

addFavoriteMovie(99);
addFavoriteMovie("El lobo feroz");
addFavoriteMovie("La gran estafa");
addFavoriteMovie("Constantine")
addFavoriteMovie("Colateral")
addFavoriteMovie("Alcatraz");

console.log(favoritesMovies);



//el throw new Error lo comenté porque es un mensaje de error nivel maximo que te corta todo el codigo!, no se sigue ejecutando lo de abajo.

