// 1) Создайте класс Plane со свойствами name и isFlying(по - умолчанию false) и методами takeOff() и land().Метод takeOff() меняет значение свойства isFlying на true, а метод land() меняет значение свойства isFlying на false.

// Создайте объект airport со свойством planes(массив объектов класса Planes) и методом getFlyingPlanes(), который вовзращающий количество элементов из массива planes, у которых isFlying равняется true.

// Cоздайте несколько объектов на основе класса Plane и добавьте их в массив самолетов в airport.Измените любым объектам значение isFlying на true; Продемонстрируйте метод getFlyingPlanes() в работе.


// Изменение isFlying сделайте при помощи кнопки по нпжптию на которую будет менятся кол - во самолетов в воздухе, тоесть братся значение getFlyingPlanes

// 2) Реализуйте класс Student(Студент), который будет наследовать от класса User.Этот класс должен иметь следующие свойства: name(имя, наследуется от User), surname(фамилия, наследуется от User), year(год поступления в вуз).Класс должен иметь метод getFullName()(наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента(от 1 до 5).Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.Текущий год получите самостоятельно.


// 	User - имеет только имя и фамилию

// Student - все остальное



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
objPlaneOne.copyInfoPlaneOne.isFlying = true;
console.log(airport.getFlyingPlanes());


btn.addEventListener('click', () => {
	airport.planes.push(airport.getFlyingPlanes());
	console.log(airport.getFlyingPlanes());
})


let date = 2023; // right now date 

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
	}

	getFullName() {
		return `${this.name} ${this.surname}`;
	}

	getCourse() {
		return date -= this.year;
	}
}

let res = new Student('svyatoslav', 'georgiyev', 2020);
console.log(res.getCourse());




