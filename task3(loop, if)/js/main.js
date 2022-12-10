// task 1
let userName = prompt('Enter to username: '); // username
let userStr = '';

for (let i = 0; i <= 3; i++) {
	if (i == 2) {
		userStr += `Happy birthday, dear ${userName}\n`;
	} else {
		userStr += 'Happy birthday to you\n';
	}
}
console.log(userStr);


// task 2
let repeatWord = prompt('Number of repeat: '); // number of repeat
let resultWord = ''; // word

for (let i = 0; i < repeatWord; i++) { // loop of repeatWord(user - prompt)
	// loop
	resultWord += '.#'; // addition .# in resultWord
}

console.log(resultWord); // resultWord
// resultWord


// task 3
let number = +prompt('Enter to number: '); // number
let sum = 0; // variable with sum

if (isNaN(number) || number === '') { // check for number
	number = +prompt('Invalid. You should enter a number: '); 
}

for (let i = 0; i < number; i++) {
	if (i % 2 !== 0) {
		sum += i; // sum += i ( 0 of number, all sum number)
	}
}
console.log(sum);
// sum


// task 4
let numberRandom = 0; // variable - number with random
let iteration = 0; // i

while (true) {
	numberRandom = Math.random(); // math random - function with random numbers
	iteration++; // i + 1

	if (numberRandom > 0.7) { // if
		console.log(`Loop was finished because of: ${numberRandom}`);
		break; // break after to loop the end
	}

	console.log(`Number of iterations: ${iteration}`); // number of iteration
}


// task 5
for (let i = 0; i <= 50; i++) {
	// console.log(`from 1 to 50: ${i}`);

	if (i % 3 == 0) {
		console.log('Div by 3');
	} else if (i % 5 == 0) {
		console.log('Div by 5');
	} else if (i % 3 == 0 && i % 5 == 0) {
		console.log('Div by 5 and 3, 4');
	} else {
		console.log(`Other numbers: ${i}`);
	}
}



// task 6
console.log('====> data and time: ');
let data = new Date();

console.log(`date = ${data.getDate()}`); // date
console.log(`year = ${data.getFullYear()}`); // year
console.log(`time = ${data.getHours()}:${data.getMinutes()}`); // time(hours and minutes)
