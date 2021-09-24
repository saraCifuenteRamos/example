var password = document.getElementById("contraseña"); // Variable para almacenar el input con ID contraseña
var formulario = document.getElementById("form-registro"); // Variable para almacenar el formulario con ID form-registro
var nombre = document.getElementById("user-name");
var respuesta = document.getElementById("respuesta");

var result = ""; // Variable para almacenar el codigo ASCII de cada caracter
var character = ""; // Variable para almacenar caracteres individuales
var mayus = false; // Variable booleana para indicar si existe una mayuscula
var minus = false; // Variable booleana para indicar si existe una minuscula
var letra = false; // Variable booleana para indicar si exixte una letra
var numero = false; //Variable booleana para indicar si existe un numero

//Metodo que evita que el formulario recargue la pagina al ser enviado
formulario.onsubmit = (e) => {
  //Evento onsubmit que ocurre al presionar el boton
  e.preventDefault(); // preventDefault() es la funcion que evita el comportamiento por defecto del formulario
  var validacionName = checkUsername(nombre.value);
  var validationPassword = checkContrasena(password.value); //Validation, variable booleana para recibir la validacion de la contraseña
  var validacionRespuesta = checkRespuestaSeg(respuesta.value);
  console.log(validacionName);
  console.log(validationPassword); // Muestra en consola el valor de Validation
  console.log(validacionRespuesta);
};

function checkUsername(valor) {
  if (valor.length > 30) {
    //alert("nombre debe ser menor de 30 digitos");
    return false;
  } else if (valor.length == 0) {
    //alert("el username no debe estar vacio");
    return false;
  } else {
    for (let i = 0; i < valor.length; i++) {
      //character = valor.charAt(i);
      result = valor.charCodeAt(i);
      if ((result >= 65 && result <= 90) || (result >= 97 && result <= 122)) {
        //console.log(character + " es letra");
        letra = true;
      } else if (result >= 48 && result <= 57) {
        //console.log(character + " es numero");
        numero = true;
      } else {
        //alert("user name debe ser alfanumericos");
        i = valor.length;
        return false;
      }
    }
    if (letra == true && numero == true) {
      return true;
    } else {
      // if (letra == false) {
      //   alert("a username le falta almenos una letra");
      // }
      // if (numero == false) {
      //   alert("a username le falta almenos un numero");
      // }
      letra = false;
      numero = false;
      return false;
    }
  }
}

//Function checkContrasena para validar el valor del input de contraseña
function checkContrasena(valor) {
  //Valor, argumento que recibe el parametro enviado desde  la linea 12
  if (valor.length >= 8) {
    for (let i = 0; i < valor.length; i++) {
      //character = valor.charAt(i);
      result = valor.charCodeAt(i);
      if (result >= 65 && result <= 90) {
        //console.log(character + " es mayuscula");
        mayus = true;
        i = valor.length;
      } else {
        mayus = false;
      }
    }

    for (let i = 0; i < valor.length; i++) {
      //character = valor.charAt(i);
      result = valor.charCodeAt(i);
      if (result >= 97 && result <= 122) {
        //console.log(character + " es minuscula");
        minus = true;
        i = valor.length;
      } else {
        minus = false;
      }
    }

    if (mayus === true && minus === true) {
      //alert("Contraseña Valida");
      return true;
    } else if (mayus === false && minus === true) {
      //alert("La contraseña debe tener una mayuscula");
      return false;
    } else if (mayus === true && minus === false) {
      //alert("La contraseña debe tener una minuscula");
      return false;
    } else if (mayus === false && minus === false) {
      return false;
    }
  } else if (valor.length == 0) {
    //alert("El campo contraseña no puede estar vacio");
    return false;
  } else {
    //alert("La contraseña debe tener minimo 8 digitos");
    return false;
  }
  //console.log(valor.value);
}

function checkRespuestaSeg(valor) {
  if (valor.length > 30) {
    //alert("respuesta debe ser menor de 30 digitos");
    return false;
  } else if (valor.length == 0) {
    //alert("respuesta no debe estar vacio");
    return false;
  } else {
    for (let i = 0; i < valor.length; i++) {
      //character = valor.charAt(i);
      result = valor.charCodeAt(i);
      if ((result >= 65 && result <= 90) || (result >= 97 && result <= 122)) {
        //console.log(character + " es letra");
        letra = true;
      } else if (result >= 48 && result <= 57) {
        //console.log(character + " es numero");
        numero = true;
      } else {
        //alert("user name debe ser alfanumericos");
        i = valor.length;
        return false;
      }
    }
    if (letra == true && numero == true) {
      return true;
    } else {
      // if (letra == false) {
      //   alert("respuesta falta almenos una letra");
      // }
      // if (numero == false) {
      //   alert("respuesta falta almenos un numero");
      // }
      letra = false;
      numero = false;
      return false;
    }
  }
}

module.exports = checkContrasena;
module.exports = checkUsername;
module.exports = checkRespuestaSeg;
