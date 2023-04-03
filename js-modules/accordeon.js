export const accordeonItem = document.querySelectorAll('.accordeon__item')
export const accordeonQuestion = document.querySelectorAll('.accordeon__question')
export const accordeonIcon = document.querySelectorAll('.accordeon__icon')

accordeonQuestion.forEach((question,i)=>{
    accordeonQuestion[i].addEventListener('click',()=>{

  
        // ocultar todas las demas respuestas
        accordeonItem.forEach((item,i)=>{
            accordeonItem[i].classList.remove('accordeon__item--active')
        })

        // mostrar respuesta
        accordeonItem[i].classList.add('accordeon__item--active')
    })
})
