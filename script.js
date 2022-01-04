//let car = {name: "Fiat",model:"500",weight:850}
const hayvan = ["kedi", "köpek", 5];
const insan = { firstname: "ahmet", surname: "k", age: 55, "family": "tellioğulları" };

//console.log(hayvan[0]);
let i = insan["firstname"];
//console.log(i);
//console.log(insan);

let degisken = "age";
//console.log(insan[degisken]);
//console.log(insan["age"]);

const myCar = { brand: "Toyota", model: 2017, color: "red", km: 86000, fuel: "lpg" };

myCar.vites = "auto";
//console.log(myCar);
myCar.km = 87000;
//console.log(myCar);
const myBootCamp = new Object();
myBootCamp.name = "FullStack";
myBootCamp.teacher = "Mustafa";
//console.log(myBootCamp);

function carCreator(brand, model, color, km) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.km = km;
}

const honda = new carCreator("honda", "civic", "blue", 15000);
//console.log(honda);

const newBoot = {
    name: "fullstack",
    lessons: ["JS", "React", "Nodejs"],
    teachers: {
        teacher_1: {
            name: "Mustafa",
            surname: "T"
        },
        teacher_2: {
            name: "Fırat",
            surname: "D"
        }
    }

}
//console.log(newBoot.teachers.teacher_1.name);
//console.log(newBoot.lessons[0]);

const user = {

    firstname: "Mehmet",
    lastname: "dede",
    fullname: function () {
        return `${this.firstname.toUpperCase()} ${this.lastname.toUpperCase()}`;

    }
}

const a = user.fullname();
//console.log(a);
//delete user.firstname;
//console.log(user);

for (key in user) {

    //console.log(key)
    //console.log(user[key]);

}



//user.country = "Finland";
//console.log(user.fullname());

const person = {
    firstname: "ali",
    lastname: "kara",
    age: 25
}

for (const key in person) {
   // console.log(key);
}

const keys = Object.keys(person);
//console.log(keys);

const values = Object.values(person);
//console.log(values);


const entries = Object.entries(person);
//console.log(entries);

const copyPerson = Object.assign({}, person);
//console.log(copyPerson);
person.age = 46;
//console.log(copyPerson);
//console.log(person);

//console.log(copyPerson.hasOwnProperty("age"));

const today = new Date();
console.log(today);
const spesificDate=new Date("06-01-2021 15:30")
console.log(spesificDate);
console.log(spesificDate.getDate());
console.log(spesificDate.getMonth()+1);
console.log(spesificDate.getFullYear());
console.log(spesificDate.toLocaleString());