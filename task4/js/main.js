// task 1
let arr = ['455', 87.15, true, undefined, 7, null, 'false', [], {}]

for (key of arr) {
	console.log(`typeof:  ${typeof key}`)
	
	if (typeof key === 'number') {
		key += 3;
		console.log(key);
	}
}


// task 2
let number = +prompt('enter to number');

let arrNumber = []; // arrNumber

let copyArr = []; // copyarr 

for (let i = 0; i < number; i++) {
	arrNumber[i] = (Math.floor(Math.random() * 10));
}

copyArr = Object.assign([], arrNumber);

for (let i = 0; i < number; i++) {
	if (((i+1) % 3) === 0) {
		copyArr[i] *= 3;
	}
}

console.log(`Arr with random numbers ===> ${arrNumber}`);
console.log(`Arr with copy ==> ${copyArr}`);



// task 3
const student1 = {
	firstName: 'Svyatoslav',
	lastName: 'Georgiyev', 
	Mark: 12,
};

console.log(student1); // student1

const student2 = { ...student1};
student2['Mark'] = 11;
console.log(student2); // student2

const student3 = Object.assign([], student1);
student3.Mark = 9;
console.log(student3); // student3

const sumStudent = student1['Mark'] + student2['Mark'] + student3['Mark'];

let resultAvarege = sumStudent / 3;

console.log(`Result avarege: ${resultAvarege.toFixed(1.5)}`); // result avarege
console.log(`student1: ${student1.Mark}, student2: ${student2.Mark}, student3: ${student3.Mark}`);


for (let key in student1) {
	console.log(`key: ${key}, value: ${student1[key]}`);
}



