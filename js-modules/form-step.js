
export const formSteps = document.querySelectorAll(".form__step")
export const startInputs = document.querySelectorAll(".form__label-step1")
//botones
export const btnNext = document.querySelectorAll(".form__button-next")
export const btnPrev = document.querySelectorAll(".form__button-prev")

export let formStepsNum = 0

console.log(btnNext)

startInputs.forEach((input,idx)=>{
    startInputs[idx].addEventListener('click',()=>{
        // Quitar clase
        formSteps[0].classList.remove('form__step--active')
        // Añadir clase
        formSteps[1].classList.add('form__step--active')

        formStepsNum++
    })
})



btnNext.forEach((btn,idx)=>{
    btnNext[idx].addEventListener('click',()=>{
        formStepsNum++
        updateForm()
        console.log(formStepsNum)
    })
})

btnPrev.forEach((btn,idx)=>{
    btnPrev[idx].addEventListener('click',()=>{
        formStepsNum--
        updateForm()
        console.log(formStepsNum)
    })
})

export function updateForm(){
    formSteps.forEach((step,idx)=>{
        formSteps[idx].classList.remove("form__step--active")
    })
    formSteps[formStepsNum].classList.add("form__step--active")
}



