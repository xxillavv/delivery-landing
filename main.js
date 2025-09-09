const burgerButtonElement = document.querySelector('.header-item-button')
const listElemets = document.querySelectorAll('.header-item')


burgerButtonElement.addEventListener('click', () => {
  listElemets.forEach(el => {
    el.classList.toggle('is-open')
  })
})
