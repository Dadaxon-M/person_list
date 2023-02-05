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
// function adress(davlat,viloyat,shahar){
//     this.davlat=davlat;
//     this.viloyat=viloyat;
//     this.shahar=shahar
// }
// function person(ismi,familiyasi, manzil = adress()){
//     this.ismi = ismi;
//     this.familiyasi=familiyasi;
//     this.manzili=manzil
// }

// const Person1 =new person("G'anijon","Sattorov",new adress("Uzb","tashkent","Chilonzor"))
// console.log(Person1);

            //2-misol
///////////////////////////////////
// let p3 = {}
// Object.assign(p3,p1) //obyektdan nusxa olish


function talaba_yonalish(bilim_yurti,kanfedra,bosqichi){
    return {
        talaba : Object.create({},{
            bilim_yurti:{
                value:bilim_yurti,
                writable:true,
                enumerable:true,
                configurable:true
            },
            kanfedra:{
                value:kanfedra,
                writable:true,
                enumerable:true,
                configurable:true
            },
            bosqichi:{
                value:bosqichi,
                writable:true,
                enumerable:true,
                configurable:true
            },
        })
    }
}

function talaba(ismi,familiyasi,t_yil,talaba_yonalish=talaba_yonalish(bilim_yurti,kanfedra,bosqichi)){
    this.ismi=ismi,
    this.familiyasi=familiyasi,
    this.t_yil=t_yil
    this.talaba_yonalish=talaba_yonalish
}

const boburjin =new talaba("Sattor","Valiyev",1991,new talaba_yonalish("tatu","radio",2009))
console.log(boburjin);

