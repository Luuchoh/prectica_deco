window.addEventListener("load", () => {
  let encriptar = document.querySelector("#encryptButton");

  encriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let textoOriginal = document.querySelector("#textBox").value;
    let textoCodificado = codificar(textoOriginal);

  });

  const codificar = (texto) => {

    let arrayTexto = texto.split("");
    let textoCodificado = "";

    arrayTexto.forEach((letra) => {
      switch (letra) {
        case "a":
            textoCodificado +="ai"
          break;
        case "e":
            textoCodificado +="enter"
          break;
        case "i":
            textoCodificado +="imes"
          break;
        case "o":
            textoCodificado +="ober"
          break;
        case "u":
            textoCodificado +="ufat"
          break;

        default:
            textoCodificado += letra
          break;
      }
    });
    
    return textoCodificado
  };

  
});
