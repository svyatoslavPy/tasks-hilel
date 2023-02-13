
const btn = document.querySelector('.btn');

class Plane {
	constructor(name, isFlying = false) {
		this.name = name;
		this.isFlying = isFlying;
	}

	takeOff() {
		return this.isFlying = true;
	}

	land() {
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
};

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



class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
}

class Student extends User {
	constructor(name, surname, year) { // year = год поступление
		super(name, surname);
		this.year = year;
		this.date = 2023; // right now year
	}

	getFullName() {
		return `${this.name} ${this.surname}`;
	}

	getCourse() {
		return this.date -= this.year;
	}
}

let res = new Student('svyatoslav', 'georgiyev', 2020);
console.log(res.getCourse());




