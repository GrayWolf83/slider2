const slides = document.querySelectorAll('.slide')
const viewer = document.querySelector('.viewer')

viewer.style.backgroundImage = slides[0].style.backgroundImage
slides[0].classList.add('active')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        viewer.style.backgroundImage = slide.style.backgroundImage
        slide.classList.add('active')
    })
}

const clearActiveClasses = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
