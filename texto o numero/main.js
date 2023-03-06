function verificarCaracter() {
    const input = document.getElementById("input-texto");
    const caracter = input.value;
    let esNumero = !isNaN(caracter);
    let mensaje = "";
    if (esNumero) {
      mensaje = "El carácter ingresado es un número";
    } else {
      mensaje = "El carácter ingresado es un texto";
    }
    document.getElementById("resultado").innerHTML = mensaje;
  }
  