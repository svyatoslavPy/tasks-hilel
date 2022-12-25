"use strict";
// task1
let p = 0;
const triangle = {
	aSide: 0,
	bSide: 0,
	cSide: 0,
	setValues: function () {
		this.cSide = +prompt('Enter to cSide value: ');
		this.bSide = this.cSide;
		this.aSide = this.cSide;
		console.log(this.aSide, this.bSide, this.cSide);
	},
	getPerimetr: function () {
		p = this.aSide + this.bSide + this.cSide;
		console.log(p);
	},
	isEqualSides: function () {
		let res = this.aSide === this.bSide && this.bSide === this.cSide && this.aSide === this.cSide ? true : false;
		console.log(res);
	}
};

triangle.setValues(); // 3 3 3
triangle.getPerimetr(); // 9
triangle.isEqualSides(); // true



// task2
var country = {
	name: 'Ukraine',
	language: 'ukrainian',
	capital: {
		name: 'Kyiv',
		population: 2907817,
		area: 847.66
	}
};

function format(start, end) {
	console.log(start + this.name + end); 
} 

format.call(country, '', ''); // Ukraine
format.apply(country, ['[',']']) // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply([''], ['undefined'.slice(1, 0), 'undefined'.slice(1, 0)]); // undefined




// task3

function createCalculator(createNum) {

	let createNumber = createNum;
	console.log(createNumber);

	return {
		add: function (num) {
			let resAdd = typeof num === 'number' ? createNumber += num : NaN;
			console.log(resAdd);
		},
		sub: function (num) {
			let resSub = typeof num === 'number' ? createNumber -= num : NaN;
			console.log(resSub);
		}
	}
}

const calculator = createCalculator(90);
calculator.add(10);
calculator.sub(10);
calculator.add('qwe');
