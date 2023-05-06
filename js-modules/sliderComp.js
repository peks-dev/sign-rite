export const inputSlider = document.getElementById("comparision-input");

window.addEventListener("load",function(){

    inputSlider.addEventListener("oninput", slide());

 function slide(){
    document.getElementById("comparision").style.display = "block";
    let slideValue = document.getElementById("comparision-input").value;
    document.getElementById("img-1").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue +"% 100%,0 100%)";
  }


})


