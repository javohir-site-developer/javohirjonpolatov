//1
// let acc = 0;
// let arr = [1, 3, 7, 5];
// const turn = arr.reduce((acc, item) => {
//   return (arr = acc + item / item);
// });
// console.log(arr);

//6
// function findSmallestInt(arr) {
//   return Math.min(...arr);
// }

// console.log(findSmallestInt([78, 56, 232, 12, 8]));

//4
// function firstNonConsecutive(hub) {
//   for (let i = 0; i < hub.length; i++) {
//     console.log(hub[i]);
//   }
// }
// firstNonConsecutive([1, 2, 3, 4]);

//10

// function between(d, c) {
//   const javob = [];
//   for (let i = d; i <= c; i++) {
//     javob.push(i);
//   }
//   return javob;
// }
// const array = between(-4, 7);
// console.log(array);

//9

// function isTriangle(a, b, c) {
//   if (a + c > b && a + b > c && b + c > a) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// isTriangle(3, 4, 5);

//2

// function cutVowel(when) {
//   const green = ["aeiou"];
//   return when.replace(green, " ");
// }

// const red = "Javohirning kundaligi";
// const javob = cutVowel(red);
// console.log(javob);

//5

// function arrNumbers(array) {
//   const goog = {};
//   for (const son of array) {
//     goog[son] = (goog[son] || 0) + 1;
//   }

//   for (const son in goog) {
//     if (goog[son] % 2 !== 0) {
//       return Number(son);
//     }
//   }

//   return null;
// }

// const son = [1, 2, 2, 5, 5];
// const til = arrNumbers(son);
// console.log(til);
