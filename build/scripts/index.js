const carousel = document.getElementById('carousel');
const totalSlides = carousel.children.length
let currentIndex = 0

function slideShow(){
    const offset = -currentIndex * 100
    carousel.style.transform = `translateX(${offset}%)`

}



setInterval(()=>{
    currentIndex = (currentIndex + 1) % totalSlides
    slideShow()
}, 4000)