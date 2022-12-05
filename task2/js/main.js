// variable number
const number = 8; // variable const number
let numberTwo = +prompt('Enter to number: ');
let lenghtWord = prompt('Enter to word: ');
let floatNumber = 0.51000002.toFixed(2);

// string word 
const str = 'the quick brown fox jumps over the lazy dogs back'; // str
const str_two = 'brown fox jumps'; // str_two
const result = str.indexOf(str_two); // result row position

let a = 1; // a 
let b = 2; // b
let c = 3; // c
let d = 3; // d

console.log(`Hex system: ${number.toString(16)}`); // hex system
console.log(`Second system: ${number.toString(2)}`); // second system
console.log(numberTwo += 2); // numberTwo - +2
console.log(numberTwo -= 2); // numberTwo - -2
console.log(lenghtWord.length); // lenghtWord result - lenght
console.log(floatNumber += 2); // result floatNumber
console.log(result); // result row position str in str_two
console.log(str.toUpperCase()); // str to uppercase

// ==== LOGICAL OPERATIONS ==== 

console.log(a > b || b < c || c === d); // true
console.log(a < b && b < c && c === d); // true

// Asterisk task
let num1 = 1;
let resultNum1 = num1 == '1' && num1 === '1';
// выводит false потому что одна из условий false, а именно num1 === '1' , так как === смотрит не только на значение, но и на тип данных.

console.log(resultNum1);

// ========================

let userName; // UserName - undifined
let resName = userName ?? 'Write your name again';

console.log(resName); // Write your name again
