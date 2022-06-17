/*
let books = [
    {
        id: 1,
        name: 'Alximik',
        author: 'Paolo Koelyo',
        pages: 153,
    },
    {
        id: 2,
        name: 'Shaytonat',
        author: 'Toxir Malik',
        pages: 864,
    },
    {
        id: 3,
        name: 'Sariq devni minib',
        author: 'Xudoyberdi To\'xtaboyev',
        pages: 356,
    },
    {
        id: 4,
        name: 'Ufq romani',
        author: 'O\'tkir Xoshimov',
        pages: 482,
    }
]

let name = prompt('nomini kiriting')

function getElementName(name){
    let book = books.find(elem => elem.name == name)
    book = JSON.stringify(book, undefined, 4)
    if(book){
        localStorage.setItem('findBookName', book)
    }else{
        localStorage.clear()
    }
}
getElementName(name)
*/ 
/*
let h1 = document.getElementsByTagName('h1')

console.log(h1)
console.log(h1[0])
*/ 

/*
let h1 = document.getElementsByClassName('name')

console.log(h1)
console.log(h1[0])
*/
/*
let h1 = document.getElementById('id')

console.log(h1)
*/ 

/*
let h1 = document.querySelector('h1')
let h1Many = document.querySelectorAll('h1')

console.log(h1)
console.log(h1Many)
*/

/*
let h1 = document.querySelectorAll('id')
let h1Class = document.querySelectorAll('.id')
let h1Id = document.querySelectorAll('#id')

console.log(h1)
*/ 

/*
let h1 = document.querySelector('h1')

h1.id = 'name'
h1.title = 'Heading one'
h1.align = 'center'
*/ 

/*
let h1 = document.querySelector('h1')
h1.classList.add('active')
h1.classList.remove('name')
// h1.classList.toogle('active')
*/ 

/*
let h1 = document.querySelector('h1')

h1.textContent = 'Islom'
h1.textContent += ' Karimov'
h1.textContent = '<mark>assadsaa</mark>'
console.log(h1.textContent)
*/

/*
let h1 = document.querySelector('h1')

h1.innerHTML = '<mark>assadsaa</mark>'

console.log(h1.textContent)
*/  

/*
let h1 = document.querySelector('h1')

h1.style.color = '#ff0000'
h1.style.textAlign = 'center'
h1.style.backgroundColor = 'blue'
*/ 


/*
let body = document.body

function changeColor(color){
    body.style.backgroundColor = color
}

let arr = ['red', 'green','blue']
let index = 0
setInterval(() => {
    if(index != 3){
        changeColor(arr[index])
        index++
    }else{
        index = 0
    }

}, 2000)
*/
/*
let number = 0
function inc(){
    number++
    document.querySelector('.count').innerHTML = number
}
function dec(){
    number--
    document.querySelector('.count').innerHTML = number
}
*/

function toggleClass (){
    document.querySelector('.box').classList.toggle('active')
}





