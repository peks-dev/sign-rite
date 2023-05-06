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

  const bussinesFlow = document.querySelector('.bussines-flow');
  const customWrapFlow = document.querySelector('.customWrap-flow');
  const formLabelStep1 = document.querySelectorAll('.form__label-step1');
  const closeButton = document.getElementById('close-btn');
  
  formLabelStep1.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (index === 0) {
        bussinesFlow.classList.add('flow-active');
       
      } else if (index === 1) {
        customWrapFlow.classList.add('flow-active');
       
      }
    });
  });
  
  closeButton.addEventListener('click', () => {
    bussinesFlow.classList.remove('flow-active');
    customWrapFlow.classList.remove('flow-active');
  })



