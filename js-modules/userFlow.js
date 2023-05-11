export const bussinesFlow = document.querySelector('.bussines-flow');
export const customWrapFlow = document.querySelector('.customWrap-flow');
export const formLabelStep1 = document.querySelectorAll('.form__label-step1');
export const closeButton = document.getElementById('close-btn');
export const welcomeSection = document.getElementById('welcome')
export const logoSite = document.getElementById('logo-site')
  
  formLabelStep1.forEach((button, index) => {
    button.addEventListener('click', () => {
        welcomeSection.style.display = "none"
        closeButton.style.display = "block"
      if (index === 0) {
        bussinesFlow.classList.add('show');
       
      } else if (index === 1) {
        customWrapFlow.classList.add('show');
        logoSite.classList.add('navbar__logo--white')
       
      }
    });
  });
  
  closeButton.addEventListener('click', () => {
    bussinesFlow.classList.remove('show');
    customWrapFlow.classList.remove('show');
    logoSite.classList.remove('navbar__logo--white')
    closeButton.style.display = "none"
    welcomeSection.style.display = "flex"
  })
  