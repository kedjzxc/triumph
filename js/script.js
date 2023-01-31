const burgerBtn = document.querySelector('.burger')
const menu = document.querySelector('.header__list')
const menuLinks = document.querySelectorAll('.header__list-link')
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    menu.classList.toggle('active')
})
menuLinks.forEach((item) => {
    item.addEventListener('click', () => {
        if(menu.classList.contains('active')) {
            menu.classList.remove('active')
        } 
        if (burgerBtn.classList.contains('active')) {
            burgerBtn.classList.remove('active')
        }
    }) 
})

// popup
const popupBtns = document.querySelectorAll('.btn')
const closePopupBtn = document.querySelector('.popup__close-btn')
const popup = document.querySelector('.popup')

popupBtns.forEach((item) => {
    item.addEventListener('click', () => {
        popup.classList.toggle('active')
    })
})

closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('active')
})