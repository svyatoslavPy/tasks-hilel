
// task1
const frameworks = ['AngularJS', 'jQuery']; // create massive

frameworks.unshift('Backbone.js'); // в начало
frameworks.push('ReactJS', 'Vue.js'); // в конец
frameworks.splice(2, 0, 'CommonJs'); // вторым элементом
console.log(frameworks);

	// for
// for (let i = 0; i < frameworks.length; i++) {
// 	if (frameworks[i] === 'jQuery') {
// 		frameworks.splice(1, 1);
// 	}
// 	console.log(frameworks[i])
// }

 // find
frameworks.find((value) => {
	if (value === 'jQuery') {
		frameworks.splice(3, 1);
		console.log(frameworks);
		console.log('Это здесь лишнее');
	}
});


// task2
const removeNegativeElements = (arr) => {
  	// for
	// for (let key of arr) {
	// 	if (key >= '0') {
	// 		console.log(key);
	// 	}
	// }
  
	// filter
	console.log(arr.filter(item => item >= '0'));
}
removeNegativeElements([-9, 2, 3, 0, -28, 'value']);



// task3
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

getStringElements([1, true, 42, "red", 64, "green", "web", new Date(), -898, false]);


// task recursian - in the process
// 2.1) 

// const massive = [];
// let sum = 0; // sum with arr

// for (let i = 0; i < 10; i++) {
// 	massive.push((Math.floor(Math.random() * 10))); 
// }


// const sumElem = (arr) => {
	
// 	arr.forEach(arr => {
// 		sum += arr;
// 	});
// 	console.log(sum);
// }

// sumElem(massive);	



