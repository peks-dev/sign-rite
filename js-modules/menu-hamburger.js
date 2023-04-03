export const hamburgerButton = document.querySelector(".hamburger");
export const menuLinks = document.querySelector(".navbar__menu-wrap")

export const linksMenu = document.querySelectorAll(".navbar__link-item")
export const logo = document.getElementById("logo-site")


hamburgerButton.addEventListener("click",hamburgerOpenClose)

linksMenu.forEach((link, idx)=>{
    linksMenu[idx].addEventListener("click",hamburgerOpenClose)
})

export function hamburgerOpenClose(){
    hamburgerButton.classList.toggle("hamburger--active")
    menuLinks.classList.toggle("navbar__menu-wrap--active")
}
