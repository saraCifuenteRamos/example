var password = document.getElementById("contraseña"); // Variable para almacenar el input con ID contraseña
var formulario = document.getElementById("form-registro"); // Variable para almacenar el formulario con ID form-registro
var name = document.getElementById("user-name");
var result = ""; // Variable para almacenar el codigo ASCII de cada caracter
var character = ""; // Variable para almacenar caracteres individuales
var mayus = false; // Variable booleana para indicar si existe una mayuscula
var minus = false; // Variable booleana para indicar si existe una minuscula

//Metodo que evita que el formulario recargue la pagina al ser enviado
formulario.onsubmit = (e) => {
  //Evento onsubmit que ocurre al presionar el boton
  e.preventDefault(); // preventDefault() es la funcion que evita el comportamiento por defecto del formulario
  var validacionName = checkUsername(name.value);
  var validationPassword = checkContrasena(password.value); //Validation, variable booleana para recibir la validacion de la contraseña
  console.log(validacionName);
  console.log(validationPassword); // Muestra en consola el valor de Validation
};

//Function checkContrasena para validar el valor del input de contraseña
function checkContrasena(valor) {
  //Valor, argumento que recibe el parametro enviado desde  la linea 12
  if (valor.length >= 8) {
    //Condicion
    for (let i = 0; i < valor.length; i++) {
      character = valor.charAt(i);
      result = valor.charCodeAt(i);
      if (result >= 65 && result <= 90) {
        console.log(character + " es mayuscula");
        mayus = true;
        i = valor.length;
      } else {
        mayus = false;
      }
    }

    for (let i = 0; i < valor.length; i++) {
      character = valor.charAt(i);
      result = valor.charCodeAt(i);
      if (result >= 97 && result <= 122) {
        console.log(character + " es minuscula");
        minus = true;
        i = valor.length;
      } else {
        minus = false;
      }
    }

    if (mayus === true && minus === true) {
      alert("Contraseña Valida");
      return true;
    } else if (mayus === false && minus === true) {
      alert("La contraseña debe tener una mayuscula");
      return false;
    } else if (mayus === true && minus === false) {
      alert("La contraseña debe tener una minuscula");
      return false;
    }
  } else if (valor.length == 0) {
    alert("El campo contraseña no puede estar vacio");
    return false;
  } else {
    alert("La contraseña debe tener minimo 8 digitos");
    return false;
  }
  console.log(valor.value);
}

module.exports = checkContrasena;
