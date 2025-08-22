//1)swap 2 numbers without temporary variable

let a = 5, b = 10;

a = a + b; // 5 + 10 = 15
b = a - b; // 15 - 10 = 5
a = a - b; // 15 - 5 = 10

console.log("\na =", a, "b =", b); // a = 10, b = 5


//2)find 3 large numbers amoung given array of numbers.
//Without using functions

function findThreeLargest(arr) {
  arr.sort((x, y) => y - x); // sort in descending order
  return arr.slice(0, 3);    // take first 3
}

let numbers = [12, 45, 1, 67, 23, 90, 34];
console.log("\nThe Three Largest numbers are:",findThreeLargest(numbers)); // [90, 67, 45]

//3)Break a whole number into digits like -> 4,5,6,2
  
  
let num = 4562;
let digits = num.toString().split("").map(Number);

console.log("\n",digits); // [4, 5, 6, 2]


//4)scale a matrix
function scaleMatrix(matrix, factor) {
  return matrix.map(row => row.map(val => val * factor));
}

let matrix = [
  [1, 2],
  [3, 4]
];

console.log("\nscale Matrix:",scaleMatrix(matrix, 2));
// [[2, 4], [6, 8]]


//5) multiply two matrix

function multiplyMatrices(A, B) {
  let result = [];

  for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < B.length; k++) {
        sum += A[i][k] * B[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

let A = [
  [1, 2],
  [3, 4]
];
let B = [
  [2, 0],
  [1, 2]
];

console.log("\nMultiply Matrices",multiplyMatrices(A, B));
// [[4, 4], [10, 8]]


//6) create a function to print elements from multi dimensional array

function printMultiArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log("\n",arr[i][j]);
    }
  }
}

let multiArr = [
  [1, 2, 3],
  [4, 5, 6]
];

printMultiArray(multiArr);
// Output: 1 2 3 4 5 6























