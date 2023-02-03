// console.log("salom");
// const person1 = Object.create({},{
//     firstName:{
//         value:'Sobir',
//         writable:true//qiymat o'zgartirishga ruxsat berish uchun k/k boladi,default holatda false bo'ladi
//           configurable:true,
//           enumerable:true  //elementni ko'rsatish uchun          
//     },
//     lastName:{
//         value:'Familiya'
//     }
// })
// const person2 = Object.create({},{
//     firstName:'Sobir',
//     lastName:'Familiya',
// })

function Person(firstname,lastname,age){
    this.ismi = firstname,
    this.familiya = lastname,
    this.yoshi = age
}
const p1 = new Person('Axmad',"toshmatov",24)
console.log(p1);

const p2 = new Person('Nurislom','Axmedov',25)
console.log(p2);

let p3 = {}
Object.assign(p3,p1) //obyektdan nusxa olish
p3.age = 55
console.log(p3);
