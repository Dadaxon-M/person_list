                                                           //1-usul
// const adress = (davlat,viloyat,shahar) => {
//    return {
//     davlat:davlat,
//     viloyat:viloyat,
//     shahar:shahar
//    }
// }

// function person(ismi,familiyasi, manzil = adress(davlat,viloyat,shahar)){
//     this.ismi = ismi;
//     this.familiyasi=familiyasi;
//     this.manzili=manzil
// }

// const Person1 =new person("G'anijon","Sattorov",adress("Uzb","tashkent","Chilonzor"))
// console.log(Person1);

                                                             //2-usul
// function adress(davlat,viloyat,shahar){
//     return {
//         adress: Object.create({},{
//             davlat:{
//                 value:davlat,
//                 enumerator:true,   //ko'rsatish imkoni
//                 writable:true,      //o'zgartirish imkoni
//                 configurable:true    
//             },
//             viloyat:{
//                 value:viloyat,
//                 enumerator:true,
//                 writable:true,
//                 configurable:true    
//             },
//             shahar:{
//                 value:shahar,
//                 enumerator:true,
//                 writable:true,
//                 configurable:true    
//             }
    
//         })
//     }
// }
// function person(ismi,familiyasi, manzil = adress(davlat,viloyat,shahar)){
//     this.ismi = ismi;
//     this.familiyasi=familiyasi;
//     this.manzili=manzil
// }

// const Person1 =new person("G'anijon","Sattorov",new adress("Uzb","tashkent","Chilonzor"))
// console.log(Person1);
//                                                   
                                                  //3-usul
function adress(davlat,viloyat,shahar){
    this.davlat=davlat;
    this.viloyat=viloyat;
    this.shahar=shahar
}
function person(ismi,familiyasi, manzil = adress()){
    this.ismi = ismi;
    this.familiyasi=familiyasi;
    this.manzili=manzil
}

const Person1 =new person("G'anijon","Sattorov",new adress("Uzb","tashkent","Chilonzor"))
console.log(Person1);
///////////////////////////////////
// let p3 = {}
// Object.assign(p3,p1) //obyektdan nusxa olish
// p3.age = 55
// console.log(p3);
// //employed
// fish:
// adress:{
//     country:,
//     region:,
//     city
// }
// lavozim:

// //talabalar
// //cars

