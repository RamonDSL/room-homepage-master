const screenOfMenu = document.querySelector(".tela")
const btn_menu = document.querySelector(".btn-menu")
const navBar = document.querySelector(".navbar")
const prev_btn = document.querySelector("#prev-btn")
const next_btn = document.querySelector("#next-btn")
const slides = document.querySelectorAll(".slide")

let current = 0

const showTextSlide = () => {
    slides.forEach(slide => {
        slide.style.display = "none"
    })

    slides[current].style.display = "block"
    showImgSlide()
}

const showImgSlide = () => {
    let Img;

    if (screen.width < 1078) {
        Img = document.querySelector("picture>source")
        Img.srcset = Img.srcset.replace(/\d(?=\.jpg)/, current+1)
    } else {
        Img = document.querySelector("picture>img")
        Img.src = Img.src.replace(/\d(?=\.jpg)/, current+1)
    }    
}

const handleMenuClick = event => {
    if (!navBar.classList.contains("active")) {
        navBar.classList.add("active")
        screenOfMenu.classList.add("active")
        btn_menu.firstChild.src = "./images/icon-close.svg"
    } else {
        navBar.classList.remove("active")
        screenOfMenu.classList.remove("active")
        btn_menu.firstChild.src = "./images/icon-hamburger.svg"
    }
}

const nextSlide = () => {
    current++
    if (current === slides.length) {
        current = 0
    }
    
    showTextSlide()
}

const prevSlide = () => {
    current--
    if (current < 0) {
        current = slides.length-1
    }
    
    showTextSlide()
}

showTextSlide()

btn_menu.addEventListener("click", handleMenuClick)
next_btn.addEventListener("click", nextSlide)
prev_btn.addEventListener("click", prevSlide)

const click = new Event("click")
const roda = () => {
    next_btn.dispatchEvent(click)
}

setInterval(roda, 5000)