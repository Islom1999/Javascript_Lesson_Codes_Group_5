
let books = [
    {
        id: 1,
        name: 'Alximik',
        author: 'Paolo Koelyo',
    },
    {
        id: 2,
        name: 'Shaytonat',
        author: 'Toxir Malik',
    }
]

function getBooks(){
    setTimeout(() => {
        console.log(books)
    },1000)
}


function pushBook(obj,callback){
    setTimeout(() => {
        books.push(obj)
        callback()
    },2000)
}


pushBook({
    id: 3,
    name: 'dsffasd',
    author: 'assad asdsad',
},getBooks)