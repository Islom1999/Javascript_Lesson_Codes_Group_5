
class Person{
    constructor(name, surName, age){
        this.ism = name,
        this.surName = surName,
        this.age = age
    }
    getFullName(){
        console.log(this.ism+' '+this.surName)
    }
    get getData(){
        return [this.ism, this.surName, this.age]
    }
    set setName(name){
        this.ism = name
    } 
}
const Islom = new Person('Islom', 'Karimov', 23)
const Ozodbek = new Person("Ozodbek", "Torayev", 18)
/*
console.log(Islom.ism)
console.log(Islom.surName)
console.log(Islom.age)

Islom.getFullName()

Islom.setName = 'Akobir'

console.log(Islom.getData)
console.log(Ozodbek.getData)
*/
/*
let arr = []
Array.isArray(arr)
Math.random()
*/
/*
class NewPerson extends Person{
    constructor(name, surName, age, isGender, isStudent){
        super(name, surName, age)
        this.isGender = isGender
        this.isStudent = isStudent
    }

}

let Akobir = new NewPerson('Akobir', "Xushvaqov", 18, 'man', true)
console.log(Akobir.isStudent)
console.log(Akobir.isGender)
console.log(Akobir.ism)

console.log(Islom.isStudent)
*/ 




