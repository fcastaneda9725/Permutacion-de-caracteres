/* Programación en JavaScript */

//Variables globales para uso de la app.
var contador = 0;
var lista = [];
/* Código para mostrar contenedor donde se pueden hacer las permutaciones */
function mostrarApp() {
  var contenido = document.getElementById('contenedor-app');
  contenido.classList.toggle('oculto');

  //Evaluación para cambiar el contenido del botón
  var boton = document.getElementById('boton-mostrar');
  if (boton.innerHTML == 'Vamos a Probarlo') {
    boton.innerHTML = 'Ocultar App';
  }else {
    boton.innerHTML = 'Vamos a Probarlo';
  }
}

/* Código para las permutaciones */
function clickBtn() {

  //Abilita botón borrar
  var botonBorrar = document.getElementById('boton-borrar');
  botonBorrar.classList.remove('disabled');

  limpiar();
  var cadena = document.getElementById('cadena').value;
  permuta(' ', cadena);
  imprimir(lista);
}

function permuta(cad1, cad2) {
  if (cad2.length == 1) {
    contador++;
    lista.push(contador + ' .-' + cad1 + cad2);
    console.log(lista);
  }

  for (var i = 0; i < cad2.length; i++) {
    permuta(cad1 + cad2.charAt(i), cad2.replace(cad2.charAt(i), ''));
  }

}

function imprimir(cadena) {
  for (var i = 0; i < cadena.length; i++) {
    var grupo = document.getElementById('lista-dinamica');
    var elementoLista = document.createElement('li');
    elementoLista.appendChild(document.createTextNode(cadena[i]));
    elementoLista.setAttribute('class', 'list-group-item');
    grupo.appendChild(elementoLista);
  }
}

function limpiar() {
  contador = 0;
  lista = [];
  return contador, lista;
}

function borrar() {
  var lista = document.getElementById('lista-dinamica');
  var elementos = document.getElementsByClassName('list-group-item');
  var x = elementos.length;
  console.log(x);
  for (var i = 0; i < x; i++) {
    lista.removeChild(elementos[0]);
  }

  //Desabilita botón borrar
  var botonBorrar = document.getElementById('boton-borrar');
  botonBorrar.classList.add('disabled');
}
