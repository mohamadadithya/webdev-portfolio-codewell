const hamburgerIcon = document.querySelector('.navbar__hamburger')
const navbarLinks = document.querySelector('.navbar__links')
const navbarButton = document.querySelector('.navbar__button')

hamburgerIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('open')
    navbarButton.classList.toggle('open')
})