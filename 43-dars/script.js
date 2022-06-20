
/*
let h1 = document.createElement('h1')

h1.style.color = 'red'
h1.style.textAlign = 'center'
h1.classList.add('active')
h1.title = 'Heading'
h1.textContent = 'Heading one'

console.log(h1)

let h2 = document.querySelector('.container h2')

document.querySelector('.container').appendChild(h1)
document.querySelector('.container').removeChild(h2)
*/ 

/*
let btn = document.querySelector('button')

btn.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.clientX)
    document.body.style.backgroundColor = 'red'
})
*/ 
/*
document.querySelector('.container').addEventListener('mouseenter', (e) => {
    let x = e.clientX
    let y = e.clientY

    let span = document.querySelector('span')

    span.style.left = x + 'px'
    span.style.top = y + 'px'

    console.log(x,y,span)
})
*/ 

/*
document.querySelector('.container').addEventListener('mouseenter', (e) => {
    document.querySelector('.container').style.backgroundColor = 'red'
})

document.querySelector('.container').addEventListener('mouseleave', (e) => {
    document.querySelector('.container').style.backgroundColor = 'aqua'
})
*/

/*
document.querySelector('input').addEventListener('blur', (e) => {
    let text = document.querySelector('input').value
    console.log(text)
})
*/
document.body.addEventListener('keypress', (e) => {
    console.log(e.keyCode)
    if(e.keyCode == 97){
        document.body.style.backgroundColor = 'green'
    }else if(e.keyCode == 115){
        document.body.style.backgroundColor = 'red'
    }
    else if(e.keyCode == 100){
        document.body.style.backgroundColor = 'blue'
    }
    else if(e.keyCode == 102){
        document.body.style.backgroundColor = 'pink'
    }
    else if(e.keyCode == 103){
        document.body.style.backgroundColor = 'purple'
    }
})


