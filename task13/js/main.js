// 1) Напишите код с ипользованим Промиса, который будет вывожить в консоль текст приветствия я через 3и секунды.

const greetingHello = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, 3000);
});

greetingHello.then(() => console.log('Hello world'));

// 2) используя async/await реализуйте функцию deleay:
function del() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), 3000);
	});
}
async function deleay() {
	console.log('first call');
	await del();
}
console.log('second call');

deleay(); // здесь код должен ждать 4 секунды и не идти дальше

// 3

// напишите функцию создаэщую и возвращающую промис, она должна быть одна и называтся createDice().Внутри этого промиса сделайте генератор случайных чисел от 0 - 10, в случае если число < 6 промис возвращает реджект, если больше или равен резолв.

// При помощи функциии создайте 3и промиса, объедените из в Promice.all.В случае если все промисы завершились успешно вывесьти 'You are lucky', если хоть один зареджектился 'Not today'.

function createDice() {
	let createDicePromice = new Promise((resolve, reject) => {
		let randomNumber = Math.floor(Math.random() * 10);
		if (randomNumber < 6) {
			reject()
		} else {
			resolve();
		}
	})
	return createDicePromice;
}
let promice = createDice();

function createThreePromice() {
	Promise.all([promice, promice, promice])
		.then(() => {
			console.log('You are lucky');
		})
		.catch(() => {
			console.log('Not today');
		})
}

createThreePromice();