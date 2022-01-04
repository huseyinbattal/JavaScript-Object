const firstname = "ahmet first"
const hayvan = ["kedi", "kopek", 5]
const insan = {
    firstname: "ahmet",
    surname: "k",
    "family": "telliogullari",
    age: 55
}

console.log(hayvan[0])
console.log(insan)
ilk ulaşım
console.log(insan.age)
console.log(insan.family)
ikinci ulaşım
console.log(insan["firstname"])
console.log(insan["family"])
console.log(insan["familyy"]) // yoksaundefined
harici bir değişşşkenle özellik çağırmak
let degisken = "age";
console.log(insan[degisken]) // ==> insan["age"]

key value arasında ":" her bir çift arasında da ","
const myCar = {
    brand: "Toyota",
    model: "2017",
    color: "red",
    km: 86000,
    fuel: "lpg"
}
myCar.vites = "auto";
myCar.km = 87000;
console.log(myCar)
ikinci oluşturma
const myBootcamp = new Object(); // => {}

myBootcamp.name = "FullStack";
myBootcamp.teacher = "mustafa";
console.log(myBootcamp)

object constructor
function carCreator(brand, model, color, km) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.km = km;
}
const honda = new carCreator("honda", "civic", "blue", 15000)
console.log(honda.color)

const newBoot = {
    name: "fullStack",
    lessons: ["JS", "React", "Nodejs"],
    teachers: {
        teacher_1: {
            name: "Mustafa",
            surname: "T"
        },
        teacher2: {
            name: "Fırat",
            surname: "D"
        }
    }
}
console.log(newBoot.teachers.teacher_1.name)
console.log(newBoot.lessons[0])

console.log(firstname)

const user = {
    firstname: "mehmet",
    lastname: "avci",
    country: "turkey",
    fullname: function (param) {
        return `${this.firstname.toUpperCase()} ${this.lastname.toUpperCase()}`;
        return this.firstname.toUpperCase() + " " + this.lastname.toUpperCase() + " " + param + " yasında";
    }
}
console.log(user.fullname(44))
document.write(user.fullname(33))
console.log(user)
delete user.country;
console.log(user)
console.log(user.fullname)
user.country = "Finland"
for...in
for (k in user) {
    console.log(k)
    console.log(user[k]) // => user["firstname"]
}

const firstname = "ahmet first"
const hayvan = ["kedi", "kopek", 5]
const insan = {
    firstname: "ahmet",
    surname: "k",
    "family": "telliogullari",
    age: 55
}

console.log(hayvan[0])
console.log(insan)
ilk ulaşım
console.log(insan.age)
console.log(insan.family)
ikinci ulaşım
console.log(insan["firstname"])
console.log(insan["family"])
console.log(insan["familyy"]) // yoksaundefined
harici bir değişşşkenle özellik çağırmak
let degisken = "age";
console.log(insan[degisken]) // ==> insan["age"]
​
key value arasında ":" her bir çift arasında da ","
const myCar = {
    brand: "Toyota",
    model: "2017",
    color: "red",
    km: 86000,
    fuel: "lpg"
}
myCar.vites = "auto";
myCar.km = 87000;
console.log(myCar)
ikinci oluşturma
const myBootcamp = new Object(); // => {}

myBootcamp.name = "FullStack";
myBootcamp.teacher = "mustafa";
console.log(myBootcamp)
​
object constructor
function carCreator(brand, model, color, km) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.km = km;
}
const honda = new carCreator("honda", "civic", "blue", 15000)
console.log(honda.color)

const newBoot = {
    name: "fullStack",
    lessons: ["JS", "React", "Nodejs"],
    teachers: {
        teacher_1: {
            name: "Mustafa",
            surname: "T"
        },
        teacher2: {
            name: "Fırat",
            surname: "D"
        }
    }
}
console.log(newBoot.teachers.teacher_1.name)
console.log(newBoot.lessons[0])

console.log(firstname)

const user = {
    firstname: "mehmet",
    lastname: "avci",
    country: "turkey",
    fullname: function (param) {
        return `${this.firstname.toUpperCase()} ${this.lastname.toUpperCase()}`;
        this.lastname = "dede";
        return this.firstname.toUpperCase() + " " + this.lastname.toUpperCase() + " " + param + " yasında";
    }
}
console.log(user.lastname)
console.log(user.fullname(44))
document.write(user.fullname(33))
console.log(user)
delete user.country;
console.log(user)
console.log(user.fullname)
user.country = "Finland"
for...in
for (k in user) {
    console.log(k)
    console.log(user[k]) // => user["firstname"]
}

let person = {
    firstname: "ali",
    lastname: "kara",
    age: 25
}
for (const key in person) {
    console.log(key)
}
console.log(person)

const keyler = Object.keys(person)
console.log(keyler) // [firstname,lastname,age]

const valuelar = Object.values(person)
console.log(valuelar) // ["ali","kara",25]

const entries = Object.entries(person)
console.log(entries)
​
​
string manipulasyon
let newnew = "new";
const yeni = newnew;
console.log(newnew, yeni)
newnew = "eski"
console.log(newnew, yeni)
​
array manipulasyon
let newArr = ["new", 5];
const yeniArr = newArr;
console.log(newArr, yeniArr)
newArr = ["eski"]
console.log(newArr, yeniArr)
​
object çoklama aslında çoklamıyor
const newPerson = person;
console.log(newPerson)
person.age = 34;
console.log(person)
console.log(newPerson)

const copyPerson = Object.assign({ age: 66 }, person)
console.log(copyPerson)
person.age = 46;
copyPerson.lastname = "yenilast"
console.log(copyPerson)


const yepyeniPerson = Object.assign(person, copyPerson)
console.log(yepyeniPerson)
person = copyPerson
console.log(person)

console.log(copyPerson.hasOwnProperty("age"))


const today = new Date()
console.log(today)
const spesificDate = new Date("12-02-2021 15:30")
console.log(spesificDate)
console.log(spesificDate.getDate())
console.log(spesificDate.getMonth() + 1)
console.log(spesificDate.getFullYear())
console.log(spesificDate.toLocaleString())