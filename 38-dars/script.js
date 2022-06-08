/*
let arr = [1,2,1,5,2,8,5,1]

for(index in arr){
    for(indexEach in arr){
        if(index != indexEach){
            if(arr[index] == arr[indexEach]){
                arr.splice(indexEach, 1)
            }
        }
    }
}
*/

/*
function func(str){
    console.log(str)
}
func('jhasgbfhlifhadfskdj')
func('ef')
func('dfdsfssddsfs')
*/
/*
function arrLog(n){
    let arr = []
    for(let i = 1; i<=n; i++){
        arr.push(i)
    }
    console.log(arr)
}
arrLog(5)
arrLog(10)
arrLog(20)
arrLog(60)
arrLog(15)
arrLog(35)
arrLog(1)
*/

/*
function arrLog(n){
    let arr = ''
    for(let i = 1; i<=n; i++){
        arr += ' '
        arr += i
    }
    console.log(arr)
}
console.log(arr)
arrLog(50)
*/

/*
let arr = 'n gacha bolgan sonlar: '
function arrLog(n){
    for(let i = 1; i<=n; i++){
        arr += ' '
        arr += i
    }
}
console.log(arr)
arrLog(50)
console.log(arr)
*/

/*
function nom (a,b,c){
    let arif = (a + b + c) / 3
    return arif
}
let a = nom(5,15, 251)  // 10
console.log(a)

console.log(nom(5,25, 156))  // 15
*/

/*
function arr(...a){
    return [...a]
}
console.log(arr(1,2,3, 'dasdas', false, null))
console.log(arr(1,2,3))
*/

/*
function arr(...a){
    return a
}
console.log(arr(1,2,3, 'dasdas', false, null))
console.log(arr(1,2,3))
*/

/* arrow
let func = (...a) => {
    console.log(a)
    return a
}
func(100)
*/
/*
let func = a => {
    console.log(a)
    return a
}
func('sdfd')
*/

/* expression
let func = function(...a){
    console.log(a)
    return a
}
func(1,2,3)
*/

/*
let arr = [2]  // global

const func = () => {
    let arr = [1]  // local
    console.log(arr)
}
func()
*/

/*
let arr = [2]
const logArr = (arr) => {
    console.log(arr)
}

const func = (s, callback) => {
    arr.push(s)
    callback(arr)
}
func(3, logArr)
func(4, logArr)
*/ 

/*
const func = (arr) => {
    for(index in arr){
        for(indexEach in arr){
            if(index != indexEach){
                if(arr[index] == arr[indexEach]){
                    arr.splice(indexEach, 1)
                }
            }
        }
    }
    return arr
}
console.log(func([1,2,1,3,2,5,3,5]))
console.log(func([15,23,'a',15,56,23,'a']))
*/

// func(15,23,15,56,23)
// func(15,23,15,56,23,56)

const func = (...a) => {
    let s = 0    
    for(i of a){
        s += i
    }
    console.log(s / a.length)
}
func(15,23,15,56,23,56)
func(2,8)

// func(2,8, '+')
// func(2,8, '-')
// func(2,8, '*')

// func(2)

