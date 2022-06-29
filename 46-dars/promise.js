
// sync
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

// sync
function getBooks(){
    // asyn
    setTimeout(() => {
        console.log(books)
    },1000)
}

// asyn
function pushBook(obj){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            books.push(obj)
        },2000)

        if(true){
            resolve('ulandi') 
        }else{
            reject('nimadur xato')
        }

    })
}


pushBook({
    id: 3,
    name: 'dsffasd',
    author: 'assad asdsad',
})
.then( data => console.log(data) )
.then(getBooks)