// // task1 
// const fillArray = (num, word) => {

// 	let arr = [];

// 	for (let i = 0; i < num; i++) {
// 		arr[i] = word;
// 	}
// 	return arr;
// }

// console.log(fillArray(3, 'qwerty'));



// // task 2
// let filterArr = [0, 1, 2, null, undefined, 'qwerty', false];

// const filterArray = (a, b, c, d, e) => {
	
// 	for (let i = 0; i < filterArr.length; i++) {

// 		if (filterArr[i] !== a && filterArr[i] !== b && filterArr[i] !== c && filterArr[i] !== d && filterArr[i] !== e) {
// 			console.log(filterArr[i]);
// 		}
// 	}
// }

// filterArray(false, undefined, 'qwerty', 0, null);




// task 3
const calcSum = (a, b, ...args) => {

	let result = a + b;
	for (let i = 0; i < args.length; i++) {
		result += args[i];
	}
	return result;
}

console.log(calcSum(1, 2, 5));



// // task 4
// const createPipe = (words) => { return `===== ${words} =====` }; 
// console.log(createPipe('some text you like'));




// // task 5
// const textOutput = (text) => {
// 	console.log(text);
// }

// const callText = (text) => {
// 	result = alert(text);
// 	return result;
// }

// console.log(textOutput('lorem'), callText('lorem'));





