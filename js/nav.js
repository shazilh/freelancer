document.addEventListener("scroll",cambiarTamanoBoostrap);

function cambiarTamanoBoostrap() {
          cambiarTamanoTexto()
}
function cambiarTamanoTexto() {
  var nav = document.getElementById("barraNav");

  if(window.scrollY < 112){
    logo.src = "assets/img/logo-white.png";
    nav.className = "";
    }
  else {
    nav.className = "cambiarColor";
    logo.src = "assets/img/logo-pink.png";
  }
}
