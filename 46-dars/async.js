
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
        },3000)

        if(true){
            resolve('ulandi') 
        }else{
            reject('nimadur xato')
        }

    })
}


async function runFunc(){
    await pushBook({id: 3,name: 'sddsasa',author: 'adasdir Malik',})
    getBooks()
}
runFunc()