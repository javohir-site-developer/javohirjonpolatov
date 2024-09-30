//1
let acc = 0;
let arr = [1, 3, 7, 5];
const turn = arr.reduce((acc, item) => {
  return (arr = acc + item / item);
});
console.log(arr);

//6
function findSmallestInt(arr) {
  return Math.min(...arr);
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));

//4
function firstNonConsecutive(hub) {
  for (let i = 0; i < hub.length; i++) {
    console.log(hub[i]);
  }
}
firstNonConsecutive([1, 2, 3, 4]);

//10
function between(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

console.log(between(1, 4));
console.log(between(-2, 2));

//9

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));

//2

function cutVowel(text) {
  return text
    .split("")
    .filter((char) => !"aeiouAEIOU".includes(char))
    .join("");
}

console.log(cutVowel("This website is for losers LOL!"));

//5

function arrNumbers(array) {
  const goog = {};

  for (const son of array) {
    goog[son] = (goog[son] || 0) + 1;
  }

  for (const son in goog) {
    if (goog[son] % 2 !== 0) {
      return Number(son);
    }
  }

  return null;
}

const son = [1, 2, 2, 5, 5];
const til = arrNumbers(son);
console.log(til);

//7
function getSum(a, b) {
  let sum = 0;
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum(0, -1));
console.log(getSum(2, 2));
