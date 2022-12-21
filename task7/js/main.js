
// task1
const frameworks = ['AngularJS', 'jQuery']; // create massive

frameworks.unshift('Backbone.js'); // в начало
frameworks.push('ReactJS', 'Vue.js'); // в конец
frameworks.splice(2, 0, 'CommonJs'); // вторым элементом
console.log(frameworks);

// for (let i = 0; i < frameworks.length; i++) {
// 	if (frameworks[i] === 'jQuery') {
// 		frameworks.splice(1, 1);
// 	}
// 	console.log(frameworks[i])
// }

frameworks.find((value) => {
	if (value === 'jQuery') {
		frameworks.splice(3, 1);
		console.log(frameworks);
		console.log('Это здесь лишнее');
	}
});


// task2
const removeNegativeElements = (arr) => {

	// for (let key of arr) {
	// 	if (key >= '0') {
	// 		console.log(key);
	// 	}
	// }

	console.log(arr.filter(item => item >= '0'));
}


removeNegativeElements([2, 5, 6, 0, -2, -1, -6, 'value']);




// task2
const getStringElements = (array) => {
	let result = [];
	for (let key of array) {
		if (typeof key === 'string') {
			result.push(key);
		}
	}
	console.log(result)
}


// const getStringElements = (array) => {
// 	console.log(array.filter(value => typeof value === 'string'));
// }

getStringElements([1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false]);