export const tabsItemsWrap = document.querySelector('.tabs__header')
export const tabsItems = document.querySelectorAll('.tabs__item')
export const tabsContentBox = document.querySelector('.tabs__content-text')
export const tabsImg = document.getElementById('tabs__content')

console.log(tabsImg.style.background)
tabsItemsWrap.addEventListener('click',(e)=>{

    if(e.target && e.target.tagName === "LI"){

        for(let i=0;i<tabsItems.length;i++){
            tabsItems[i].classList.remove('tabs__item--active')
        }
        console.log(e.target.innerHTML)
        if(e.target.innerHTML === "wraps"){
            //Añadir estilos de Boton Activo
            e.target.classList.add('tabs__item--active')
            // Añadir texto
            tabsContentBox.innerHTML = "for people who want to protect their high-end car, or for companies who want their fleet of cars with a uniform design"
            //cambiar img de fondo
            tabsImg.style.background = "linear-gradient(to bottom, rgba(11,9,10, 1), rgba(11,9,10, 0.9), rgba(11,9,10,0)), url(../../assets/bg/wrapping.jpg)";
            tabsImg.style.backgroundSize = "cover";
            tabsImg.style.backgroundPosition = "center";





        }if(e.target.innerHTML === "signs"){
            //Añadir estilos de Boton Activo
            e.target.classList.add('tabs__item--active')
            // Añadir texto
            tabsContentBox.innerHTML = "esto esta caommo!!!"
            //cambiar img de fondo
            tabsImg.style.background = "linear-gradient(to bottom, rgba(11,9,10, 1), rgba(11,9,10, 0.9), rgba(11,9,10,0)), url(../../assets/bg/signing.jpg)";
            tabsImg.style.backgroundSize = "cover";
            tabsImg.style.backgroundPosition = "center";

        } else{}
    }

   
})
