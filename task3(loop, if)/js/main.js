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

for (let i = 0; i < repeatWord; i++) {
	// loop
	resultWord += '.#'; // addition .# in resultWord
}

console.log(resultWord);
// resultWord

// task 3
let number = +prompt('Enter to number: ');
let sum = 0;

if (isNaN(number) || number === '') {
	number = +prompt('Invalid. You should enter a number: ');
}

for (let i = 0; i < number; i++) {
	if (i % 2 !== 0) {
		sum += i;
	}
}
console.log(sum);
// sum

// task 4

let numberRandom = 0;
let iteration = 0;

while (true) {
	numberRandom = Math.random();
	iteration++;

	if (numberRandom > 0.7) {
		console.log(`Loop was finished because of: ${numberRandom}`);
		break;
	}

	console.log(`Number of iterations: ${iteration}`);
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


let data = new Date();

console.log(`Data: ${data.getUTCDate()}, Time: ${data.getUTCHours()}:${data.getUTCMinutes()}`);
