
/*
let arr = []
for(let i = 0; i <= 10; i++){
    arr[i] = i * 10
}
console.log(arr)
*/

/*
let k = 10
let l = 50
let s = 0

if(k < l){
    for(let i = k + 1; i < l; i++){
        s += i
    }
    console.log(s)
}
*/
/*
let n = 5
let arr = []
let s = 0

for(let i = 0; i <= n; i++){
    arr[i] = +prompt(i + ' - index uchun son kiriting')
}
for(let i = 0; i <= arr.length - 1; i++){
    s += arr[i]
}
console.log(s)
*/
/*
let arr = [1,2,3,4,5,6]
for(let i = 0; i <= arr.length - 1; i++){
    console.log(arr[i])
}
*/

/* i arr ni ichidagi qiymatlarni oladi
let arr = [1,2,3,4,5,6]
arr.reverse()
for(i of arr){
    console.log(i)
}
*/
/* i arr ni ichidagi indexlarni oladi satr qilib
let arr = [1,2,3,4,5,6]
arr.reverse()
for(i in arr){
    console.log(i)
}
*/

/*
let arr = []
let n = 10
let s = 0

for(let i = 0; i <= n-1; i++){
    arr.push(parseInt(Math.random() * 100))
}
for(elem of arr){
    s += elem
}
console.log(arr)
console.log(s / arr.length)
*/

/*
let arr = ['fasfdas', 'asfsaa', 5, 8, 'awdsaas', 6]
for(elem of arr){
    if(typeof elem == "string"){
        console.log(elem)
    }
}
*/

/*
let arr = []
let n = 5

for(let i = 0; i <= n-1; i++){
    arr.push(+prompt('element kiriting'))
}

console.log(arr)
let isJuft = prompt('Juft and Toq')

if(isJuft == 'juft' || isJuft == 'Juft'){
    for(index in arr){
        if(index % 2 == 0){
            console.log(arr[index])
        }
    }
}
if(isJuft == 'toq' || isJuft == 'Toq'){
    for(index in arr){
        if(index % 2 == 1){
            console.log(arr[index])
        }
    }
}
*/

/*
let arr = [1,2,1,5,2,8,5,1]

console.log(arr)

for(index in arr){
    for(indexEach in arr){
        if(index != indexEach){
            if(arr[index] == arr[indexEach]){
                arr.splice(indexEach, 1)
            }
        }
    }
}

console.log(arr)
*/

/*
2 x 1 = 2*1
2 x 2 = 2*2
...
2 x 10 = 2*10
*/

/*
let karra = +prompt('Sizga nechi kara kerak')
for(let i = 1; i<=10; i++){
    console.log(`${karra} x ${i} = ${karra * i}`)
}
*/

//alert('saytga kirdiz')

/*
let prom = prompt('input kiriting')
console.log(prom, typeof prom)
*/

/*
let bool = confirm('saytdan chiqmoqchimisz')
console.log(bool, typeof bool)
*/
/*
console.log('Hello', 'Islom')
console.log('%s Hello', 'Islom')

console.log('%d place', 32)

console.log('%c Hello World', 'color:red; background: #0000ff; font-size: 50px')

console.warn('Siz notogri malumot kiritdiz')

console.error('Siz notogri malumot kiritdiz')
*/

/*
let arr = [[1,2],[1,5],[2,8],[5,1]]
console.table(arr)
*/
let arr = []

console.time('Regular for loop')

for (let i = 0; i < 5000000; i++) {
    arr.push(arr)
}

console.timeEnd('Regular for loop')