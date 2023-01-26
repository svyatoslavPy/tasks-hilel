// 1) Напишите код с ипользованим Промиса, который будет вывожить в консоль текст приветствия я через 3и секунды.

// const greetingHello = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve();
// 	}, 3000);
// });

// greetingHello.then(() => console.log('Hello world'));


// 2) используя async/await реализуйте функцию deleay:
function del() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), 3000);
	});
}

async function deleay() {
	await del();
}

console.log('first call');

deleay(); // здесь код должен ждать 4 секунды и не идти дальше

console.log('second call');


// 3