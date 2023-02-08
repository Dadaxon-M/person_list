// function adress(davlat, viloyat, shahar) {
//     const adress = Object.create({}, {
//         davlat: {
//             value: davlat,
//             enumerator: true,   //ko'rsatish imkoni
//             writable: true,      //o'zgartirish imkoni
//             configurable: true
//         },
//         viloyat: {
//             value: viloyat,
//             enumerator: true,
//             writable: true,
//             configurable: true
//         },
//         shahar: {
//             value: shahar,
//             enumerator: true,
//             writable: true,
//             configurable: true
//         }

//     });
//     return adress;

// }
// function Person(ismi, familiyasi, manzil = adress()) {
//     this.ismi = ismi;
//     this.familiyasi = familiyasi;
//     this.manzil = manzil
// }
// const person = new Person("G'anijon2", "Sattorov2",adress("uzb","tosh","mirzo") )
// console.log(person);
// console.log(person.manzil.shahar);

// class yaratamiz
// class Person {
//   constructor(firstname, lastname, age, jinsi) {
//     this.ismi = firstname;
//     this.familiya = lastname;
//     this.yosh = age;
//     this.jinsi = jinsi;
//   }
// }

// class Doctor extends Person {
//   constructor(firstname, lastname, age, jinsi, mutahasislik, adress) {
//     super(firstname, lastname, age, jinsi);
//     this.mutahasislik = mutahasislik;
//     this.adress = adress;
//   }
// }
// const Vrach = new Doctor("Islom","Turdiyev",18,"o'g'il","jarroh","mirzo ulugbek");

// class Mashina{
//     constructor(nomi,modeli,rang,narhi,ot_kuchi,yoqilgi_sarfi){
//         this.nomi = nomi;
//         this.modeli = modeli;
//         this.rang = rang;
//         this.narhi = narhi;
//         this.ot_kuchi = ot_kuchi;
//         this.yoqilgi_sarfi = yoqilgi_sarfi
//     }
// }
// const nexia = new Mashina("Nexia","chevrolet","oq","15000$",105,10)
// const nexia = new Mashina()
// console.log(nexia);



// {key:value}       {  }  //-- lugat, obyekt
// [manzil,kochcha]    [ 1,2,3]  // --ro'yhat

// const mevalar = ["anjir","olma","banan","behi"]
// mevalar.unshift("qulupnay")
// mevalar.push("uzum")
// mevalar.shift()
// mevalar.pop()
// mevalar[mevalar.length] = "anjir"
// mevalar[100] = "kivi"
// console.log(mevalar.length);
// console.log(mevalar);
// console.log(mevalar);

// const persons = [
// {
//     firstname:"sattor",
//     age:45,
//     fdsfd:"dfdfdf",
//     jinsi:"erkak",
//     adress:{
//         mamlakat:"O'znekiston",
//         viloyat:"toshkent",
//         shahar:"mirzoulug"
//     }
// },
// {
//     firstname:"Gani",
//     age:55,
//     fdsfd:"dfdfdf",
//     jinsi:"erkak",
//     adress:{
//         mamlakat:"O'znekiston",
//         viloyat:"toshkent",
//         shahar:"mirzoulug"
//     }
// },
// {
//     firstname:"farsi",
//     age:55,
//     fdsfd:"dfdfdf",
//     jinsi:"erkak",
//     adress:{
//         mamlakat:"O'znekiston",
//         viloyat:"toshkent",
//         shahar:"mirzoulug"
//     }
// }
// ]

// console.log(persons[0].firstname);


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter"); 
// console.log(myChildren);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.splice(0, 3);
// console.log(fruits.length);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.splice(3,0, "Lemon", "Kiwi");
// console.log(fruits);


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(citrus);