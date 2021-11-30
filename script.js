let navbar = document.querySelector('.navbar');
console.log(navbar);
window.addEventListener('scroll',()=>{
    if(window.scrollY > 0){
        navbar.classList.add('active');
    }
    else{
        navbar.classList.remove('active');
    }
})

// ----login form--------------------------------

let login = document.querySelector('#login')
let loginWrapper = document.querySelector('.login-wrapper')
login.addEventListener('click',()=>{
loginWrapper.classList.toggle('active')
})

// =============hamburger================================
let hamburgerMenu = document.querySelector('#hamburger')
let navlist = document.querySelector('.navlist')

hamburgerMenu.addEventListener('click',()=>{
    hamburgerMenu.classList.toggle('fa-times')
    navlist.classList.toggle('active')
})
window.onscroll = ()=>{
    hamburgerMenu.classList.remove('active')
    navlist.classList.remove('active')
    hamburgerMenu.classList.remove('fa-times')
}