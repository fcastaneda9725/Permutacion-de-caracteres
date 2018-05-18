/* Programación en JavaScript */

//Variables globales para uso de la app.
var contador = 0;
var lista = [];
/* Código para mostrar contenedor donde se pueden hacer las permutaciones */
function mostrarApp() {
  var contenido = document.getElementById('contenedor-app');
  contenido.classList.toggle('oculto');
  var boton = document.getElementById('boton-mostrar');
  if (boton.innerHTML == 'Vamos a Probarlo') {
    boton.innerHTML = 'Ocultar App';
  }else {
    boton.innerHTML = 'Vamos a Probarlo';
  }
}

/* Código para las permutaciones */
function clickBtn() {
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
    var l = document.createElement('li');
    l.appendChild(document.createTextNode(cadena[i]));
    l.setAttribute('class', 'list-group-item');
    grupo.appendChild(l);
  }
}

function limpiar() {
  contador = 0;
  lista = [];
  return contador, lista;
}
