
let navBtn = document.querySelector('.nav-toggle')

navBtn.addEventListener('click', () => {
    document.querySelector('.media').classList.toggle('active')
})

function toggleColor(color){
    let arrBG = document.querySelectorAll('.bg-color')

    arrBG.forEach(elem => {
        elem.style.backgroundColor = color
    })

    let arrText = document.querySelectorAll('.text-color')

    arrText.forEach(elem => {
        elem.style.color = color
    })
}