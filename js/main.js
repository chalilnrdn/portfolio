// toggle navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

const typed = new Typed('.multiple-text', {
    strings : ['Software Engineer', 'UI UX Designer', 'Student IDN Akwat'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 100,
    loop : true 
})



