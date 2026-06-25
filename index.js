// const person = {
//   studentId: "674259025",
//   name: "saharat",
//   lastname: "Benjaisirluck",
//   gender: false, //true = male,false = female
//   married: true, //true = married,false = single
//   subject: ["Math", "Programing", "English"],
//   address: {
//     number: "167/6",
//     subDistrict: "Mae Klong",
//     district: "Mueang",
//     province: "Samut",
//     postalCode: "75000",
//   },
// };
// let title = person.gender ? "นาย" : person.married ? "นาง" : "นางสาว";

// const [one, two, three] = person.subject;

// console.log(`
//             สวัดดี  ${title} ${person.name}
//             นามสกุล ${person.lastname}
//             วิชาที่ชอบตามลำดับ ${two},${one},${three}
//             ที่อยู่ ${person.address.number}
//                 ${person.address.subDistrict}
//                 ${person.address.district}
//                 ${person.address.postalCode}
// `);

// import * as math from "./math.js";
// const a = 5;
// const b = 6;

// console.log(`${a} + ${b} = ` + math.add(a, b));

// console.log(`${a} + ${b} = ` + math.add1(a, b));

// console.log(`${a} * ${b} = ${math.multiply(a, b)}`);

// console.log(`${a} / ${b} = ${math.divide(a, b)}`);

// console.log(`${a} % ${b} = ${math.modulus(a, b)}`);

// console.log (`  อีกรูปแบบที่ทำได้
//   ${a} + ${b} = ${math.add(a, b)}

// `);

import "dotenv/config" ;
const port = process.env.PORT;
const name = process.env.NAME;

console.log(port);
console.log(name);
console.log(process.env.SECRET_KEY);
