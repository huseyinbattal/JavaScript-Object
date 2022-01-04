let araba = {
    marka: "Jaguar",
    model: "XS",
    modelYear: [2020, 2022],
    benzin: 10,
    info: function (params) {
        //return console.log(`Markası:${this.marka} modeli:${this.model},sahibi ${params}`)
    },
    setFuel(params) {
        this.benzin+=params
    },
    getFuel(params){
        this.km = params;
        return (this.km*this.benzin)
    }

}

//console.log(araba.benzin);
//console.log(araba["benzin"]);
araba.info("Ben");
araba.setFuel(15);
//console.log(araba.benzin);
//console.log(araba.getFuel(1000));
//console.log(araba);

let student = {
    name: "Ali",
    surname: "Turko",
    age:25,
    get fullname() {
        if (this.name && this.surname) {
            
            return this.name + " " + this.surname;
            
        }
        else {
            return "Missing name or Surname";
        }
    },
    set ageUpdate(num){
        if (this.age > 23) {
            this.age += num;
        } else {
            //console.log("He is young")
        }
    }

}

document.write(student.fullname);
student.ageUpdate = 6;
//console.log(student.age);


let a = [5, 3, 6,"yedi"];
let b = [...a, 7];
//console.log(b);

let student1 = {
    name: "Ali",
    surname: "Turko",
    age: 25,
}

let newStu = { ...student1,ders:"Matematik",surname:"Deli"};
//console.log(newStu);


let copyStu = student;
copyStu.surname = "yeni";
//console.log(student);


//destruct

const first = a[0];
//console.log(first);
const [x,y,z,t] = a;  // => [x,y,z]=[5,3,6,"yedi"]=>let a=[5,3,6]
//console.log(x, y, z, t);

let ilkisim = student.name;
//console.log(ilkisim);

const { name,surname} = student;
//console.log(name,surname);


const rectangle = {
    width: 20,
    height: 10
}
const rectangle2 = {
    width: 30,
    height: 8
}

const { width: w, height: h } = rectangle;
console.log("Uzun kenar:"+w,"Kısa kenar: " +h);

function areaCalculation(obj) {
    console.log( "Alan:"+ obj.width * obj.height+" metrekare");
}

areaCalculation(rectangle);
areaCalculation(rectangle2);

function areaCalc({width, height}) {
    console.log(width*height)
}

areaCalc(rectangle2);



