// 1. Реализуйте предыдущее ДЗ только при помощи прототипов как было разсмотренно на лекции.Не использую ключевое слово class
// 	К стандартному классу String добавте метод countAllUpperCase, который будеет подсчитывать все заглавные буквы в строке.

const btn = document.querySelector('.btn');

function Plane(name, isFlying = false) {
	this.name = name;
	this.isFlying = isFlying;

	this.takeOff = function () {
		return this.isFlying = true;
	}

	this.land = function () {
		return this.isFlying = false;
	}
}
const airport = {
	planes: [
		new Plane('Boeing', true),
		new Plane('Boeing-375', true),
		new Plane('Mriya', true)
	],
	getFlyingPlanes: function () {
		return this.planes.length;
	}
}
console.log(airport.getFlyingPlanes());

const objPlaneOne = { // create obj
	copyInfoPlaneOne: new Plane('Boeing-377')
};

const objPlaneTwo = {
	copyInfoPlaneTwo: new Plane('Boeing-377')
};

const objPlaneThree = {
	copyInfoPlaneThree: new Plane('Boeing-377')
};

airport.planes.push(objPlaneOne, objPlaneTwo, objPlaneThree); // add obj in planes []
objPlaneOne.copyInfoPlaneOne.takeOff();
console.log(airport.getFlyingPlanes());


btn.addEventListener('click', () => {
	airport.planes.push(airport.getFlyingPlanes());
	console.log(airport.getFlyingPlanes());
})


function User(name, surname) {
	this.name = name;
	this.surname = surname;
}

const user = new User('Svyatoslav', 'Georgiyev');

function Student(year) {
	this.year = year;
	this.date = 2023; // right now year

	this.getFullName = function () {
		return `${this.name} ${this.surname}`
	}

	this.getCourse = function () {
		return this.date -= this.year;
	}
}

const student = new Student(2020);
student.__proto__ = user;	
console.log(student.getFullName());

String.prototype.countAllUpperCase = function() {
	let amountUpperCase = 0;
	for (let i = 0; i < this.length; i++) {
		if (this[i] === this[i].toUpperCase()) {
			amountUpperCase++;			
		}
	}
	console.log(amountUpperCase);
}


let str = 'LoReM';
str.countAllUpperCase(); // => 3 
