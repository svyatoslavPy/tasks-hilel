const elem = document.getElementsByClassName('divs') // divs
const selected = document.getElementById('block__choise'); // block__choise
const body = document.querySelector('body');
const input = document.querySelector('.input');
const inputBtn = document.querySelector('.input__btn');

console.log(input) // input
console.log(inputBtn); // input btn
console.log(body) // body
console.log(selected); // selected
console.log(elem); // selected text

for (let key of elem) { // for all divs
	key.addEventListener('click', (e) => {
		e.stopPropagation(); // stopPropagetion
		const res = e.target.getAttribute("div-name"); // getAttribute - "div-name"

		if (res === null) { // если пустой 
			selected.textContent = `Selected: XXXXXX`;
		} else { // иначе 
			selected.textContent = `Selected: ${res}`;
		}
	})
}

const handler = (event) => { // функция для двух кнопок
	let handler = event.target.getAttribute("div-name");
	selected.textContent = `Selected:${handler}`;
}
 
body.addEventListener('click', () => { // body
	selected.textContent = `Selected: XXXXXX`;
})


const keyPress = (event) => { 
	if (event.key === event.key.toUpperCase()) {
		event.preventDefault();
	}
}

inputBtn.disabled = true; // disabled with input

inputBtn.addEventListener('click', () => {
	let resInput = input.value;
	alert(resInput);	
})

input.addEventListener('click' , () => {
	if (input.value !== '') {
		inputBtn.disabled = false;
	} else {
		inputBtn.disabled = true;
	}
})

