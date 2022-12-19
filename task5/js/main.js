/*  My js tasks
              .'  '. 
             :      :
             | _  _ |
          .-.|(o)(o)|.-.        
         ( ( | .--. | ) )     
          '-/ (    ) \-'     
           /   '--'   \     
           \ `"===="` /     
            `\      /'            
              `\  /'              
              /`-.-`\_            
        _..:;\._/V\_./:;.._       
      .'/;:;:;\ /^\ /:;:;:\'.    
     / /;:;:;:;\| |/:;:;:;:\ \   
    / /;:;:;:;:;\_/:;:;:;:;:\ \ */

// task1
const fillArray = (num, word) => {

	let arr = [];

	for (let i = 0; i < num; i++) {
		arr[i] = word;
	}
	return arr;
}

console.log(fillArray(3, 'qwerty'));

// task 2
let filterArr = [0, 1, 2, null, undefined, 'qwerty', false];
let deleteArr  = [0, 1, 2];

const filterArray = (filterArr, deleteArr) => {
	const resultFilter = filterArr.filter(item => deleteArr.includes(item));
	return resultFilter;
}

console.log(filterArray(filterArr, deleteArr));

// task 3
const calcSum = (...args) => {

	let result = 0;

	for (let i = 0; i < args.length; i++) {
		result += args[i];
	}
	return result;
}

console.log(calcSum(1, 5, 2));

// task 4
function createPipe(simvol) {
	return function (words) {
		console.log(`${simvol} ${words} ${simvol}`);
	}
}

const pipeFunction = createPipe('=====');
console.log(pipeFunction('lorem'));

// task 5
const textOutput = (text) => {
	console.log(text);
}

const callText = (text) => {
	result = alert(text);
	return result;
}

console.log(textOutput('lorem'), callText('lorem'));
