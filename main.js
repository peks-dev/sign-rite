import {} from "./js-modules/accordeon.js";
import {} from "./js-modules/menu-hamburger.js"
import {} from "./js-modules/tabs.js"
import {} from "./js-modules/biblioteca.js"
import {} from "./js-modules/gallery-mansory.js"
import {} from "./js-modules/userFlow.js"


function slide() {
    let slideValue = document.getElementById("comparision-input").value;
    document.getElementById("img-1").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue +"% 100%,0 100%)";
  }
  
  window.addEventListener("load", function() {
    document.getElementById("comparision").style.display = "block";
    // Agregar el listener para el evento input del input
    document.getElementById("comparision-input").addEventListener("input", slide);
  });

  



