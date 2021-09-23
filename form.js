var password = document.getElementById("contraseña");
// var button = document.getElementById("btn-registrar");
var formulario = document.getElementById("form-registro");
var result = "";
var character = "";

formulario.onsubmit = (e) => {
  e.preventDefault();
  checkContrasena(password.value);
};

function checkContrasena(valor) {
  if (valor.length >= 8) {
    for (let i = 0; i < valor.length; i++) {
      character = valor.charAt(i);
      result = valor.charCodeAt(i);
      if (result >= 65 && result <= 90) {
        console.log(character + " es mayuscula");
      } else {
        console.log(character + " es otra cosa");
      }
    }
  } else {
    alert("fallaste");
  }
  console.log(valor.value);
}

module.exports = checkContrasena;
