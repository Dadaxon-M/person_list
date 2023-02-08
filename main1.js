class Person {
  constructor(firstname, lastname, age, jinsi) {
    this.ismi = firstname;
    this.familiya = lastname;
    this.yosh = age;
    this.jinsi = jinsi;
  }
}

class Doctor extends Person {
  constructor(firstname, lastname, age, jinsi, mutahasislik, adress) {
    super(firstname, lastname, age, jinsi);
    this.mutahasislik = mutahasislik;
    this.adress = adress;
  }
}

class Adress{
    constructor(city,destrict,adressline1){
        this.city = city;
        this.destrict = destrict;
        this.adressline1 = adressline1
    }
}

// const Vrach0 = new Doctor("Dilshod","Turdiyev",18,"o'g'il","jarroh",new Adress("Tashkent","Chilonzor","122-uy"));

let list1 = [];
// for (let index = 0; index < 20; index++) {
//     let age = Math.random()*(100-10)+10
//     let age1 = Math.floor(age)
//     list1.push(new Doctor(`Dilshod ${index}`,`Turdiyev ${index}`,`${age1}`,"o'g'il","jarroh",new Adress("Tashkent","Chilonzor","122-uy")))
// }
// console.log(list1);
// const filter_list1 = list1.filter(i => i.yosh <70);
// console.log(filter_list1);

// console.log(typeof list1);
// console.log(typeof JSON.stringify(list1));
// localStorage.setItem("person",JSON.stringify(list1)) //--yuklash

const list1_str = localStorage.getItem("person") //yuklab olish
if (list1_str!=null){
    const json = JSON.parse(list1_str)
    list1 = [...json]
}

console.log(list1);
const list2 = list1.filter(i => i.yosh <30)
console.log(list2);

const[person1,person2,...qolganPersonlar] = [...list2]

console.log(...qolganPersonlar);




// console.log(list1_str);
// // console.log(typeof list1_str);
// let person = [...list1_str]
// list1.push(person)
// console.log(list1);
// const list2 = list1.filter(i => i.yosh < 70);
// console.log(list2);


