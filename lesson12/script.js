// 1. Function Decloration
// let a = 10;
// let b = 20;
// function functionName(raqam1, raqam2) {
//   let bolinma = raqam2 / raqam1;
//   return bolinma;
// }
// console.log(functionName(a, b));

// 2. Expression Function
// const functionName2 = function (raqam3, raqam4) {
//   return raqam4 / raqam3;
// };
// console.log(functionName2(a, b));

// 3. Arrow Function
// const functionName3 = (raqam5, raqam6) => {
//   return raqam6 / raqam5;
// };
// console.log(functionName3(a, b));

// ------------------------------------------------------------------

// let start = 1;
// let stop = 10;
// function summa(a, b) {
//   let yigindi = 0;
//   for (let i = a; i <= b; i++) {
//     yigindi += i;
//   }
//   return yigindi;
// }
// console.log(summa(start, stop));

// const summa2 = function (c, d) {
//   let yigindi = 0;
//   for (let i = c; i <= d; i++) {
//     yigindi += i;
//   }
//   return yigindi;
// };
// console.log(summa2(start, stop));

// const summa3 = function (c, d) {
//   let yigindi = 0;
//   for (let i = c; i <= d; i++) {
//     yigindi += i;
//   }
//   return yigindi;
// };
// console.log(summa3(start, stop));

// --------------------------------
let a = 5;
let b = 7;
function kattaSon(raqam1, raqam2) {
  if (raqam1 > raqam2) {
    console.log(raqam1, "Katta");
    console.log(raqam2, "Kichik");
  } else if (raqam1 < raqam2) {
    console.log(raqam1, "Kichik");
    console.log(raqam2, "Katta");
  } else {
    console.log(raqam1, "va", raqam2, "bir-biriga teng.");
  }
}
kattaSon(a, b);

const kattaSon2 = function (raqam3, raqam4) {
  if (raqam3 > raqam4) {
    console.log(raqam3, "Katta");
    console.log(raqam4, "Kichik");
  } else if (raqam3 < raqam4) {
    console.log(raqam3, "Kichik");
    console.log(raqam4, "Katta");
  } else {
    console.log(raqam3, "va", raqam4, "bir-biriga teng.");
  }
};
kattaSon2(a, b);

const kattaSon3 = (raqam5, raqam6) => {
  if (raqam5 > raqam6) {
    console.log(raqam5, "Katta");
    console.log(raqam6, "Kichik");
  } else if (raqam5 < raqam6) {
    console.log(raqam5, "Kichik");
    console.log(raqam6, "Katta");
  } else {
    console.log(raqam5, "va", raqam6, "bir-biriga teng.");
  }
};
kattaSon3(a, b);