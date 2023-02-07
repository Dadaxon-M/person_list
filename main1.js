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
