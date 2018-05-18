/* Programación en JavaScript */
var contador = 0;
var lista = [];

//Variables globales para uso de la app.
function limpiar() {
  contador = 0;
  lista = [];
  return contador, lista;
}

function clickBtn() {
  limpiar();
  var cadena = document.getElementById('cadena').value;
  permuta(' ', cadena);
}

function permuta(cad1, cad2) {
  if (cad2.length == 1) {
    contador++;
    lista.push(contador + '=' + cad1 + cad2);
    console.log(lista);
  }

  for (var i = 0; i < cad2.length; i++) {
    permuta(cad1 + cad2.charAt(i), cad2.replace(cad2.charAt(i), ''));
  }
}
