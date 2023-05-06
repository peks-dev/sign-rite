const botonesFiltro = document.querySelectorAll(".gallery__filter-button");
const galleryContainer = document.getElementById('gallery-imgs-container');
import {trabajos} from "./biblioteca.js";

// Revolver imagenes
const shuffleArray = array => {
  for (let i = array.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array; 
};

let imgsRevueltas = shuffleArray(trabajos);
let galleryDom = [];
let numImagenesMostradas = 0;

// Funcion para pintar una imagen
const pintarImg = imagen => {
  // Crear contenedor div
  let crearDiv = document.createElement('div');
  crearDiv.setAttribute('class','gallery-mansory__img-wrapper');
  crearDiv.setAttribute('data-category',imagen.categoria);

  // Crear img
  let crearImg = document.createElement('img');
  crearImg.setAttribute('class','gallery-mansory__img-wrapper-item');
  crearImg.setAttribute('src', imagen.foto);

  // Agregar la imagen al contenedor
  crearDiv.appendChild(crearImg);

  // Agregar el contenedor al contenedor principal
  galleryContainer.appendChild(crearDiv);

  // Añadir el contenedor al array del DOM
  galleryDom.push(crearDiv);

  // Aumentar el contador de imagenes mostradas
  numImagenesMostradas++;
};

// Funcion para mostrar mas imagenes
const mostrarMasImagenes = () => {
  // Obtener las siguientes 12 imagenes
  const siguientesImagenes = imgsRevueltas.slice(numImagenesMostradas, numImagenesMostradas + 12);

  // Recorrer las siguientes imagenes y pintarlas
  for (let i = 0; i < siguientesImagenes.length; i++) {
    pintarImg(siguientesImagenes[i]);
  }
};

// Mostrar las primeras 12 imagenes al cargar la pagina
mostrarMasImagenes();

// Agregar evento al boton de "Mostrar mas"
const botonMostrarMas = document.getElementById('gallery__show-more-button');
botonMostrarMas.addEventListener('click', mostrarMasImagenes);


    const lightbox = document.querySelector('.lightbox')
    const imgLightbox = document.querySelector('.lightbox__img-item')
    const botonLightbox = document.querySelector('.lightbox__button')


    galleryContainer.addEventListener('click',(e)=>{
        if(e.target && e.target.tagName === "IMG"){
            lightbox.classList.add('lightbox--active')
            let imgSource = e.target.getAttribute('src')

            imgLightbox.setAttribute('src', imgSource)    
            }
         })

        botonLightbox.addEventListener('click',()=>{
            lightbox.classList.remove('lightbox--active')
        })
        
        