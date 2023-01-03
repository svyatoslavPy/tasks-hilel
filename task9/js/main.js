// На странице находится инпут и две кнопки и div.

// Пользователь может ввести что - то в инпут и нажать на кнопку,

// 	после этого в div выше должна отобразится строка с тем что было введено в инпуте.

// Вторя кнопка очищает инпут и div.

const inputForm = document.querySelector('.input');
const div = document.querySelector('.block');
const btn = document.querySelectorAll('.button__item')
const inputText = document.querySelector('.input__text');
console.log(btn)

btn[0].addEventListener('click', () => { // btn - add to html 
	div.innerHTML = inputForm.value;
})

btn[1].addEventListener('click', () => { // btn - delete to html
	div.innerHTML = inputForm.value = "";
})

btn[0].addEventListener('click', () => {
	if (inputForm.value === '') {
		inputText.classList.add('input__text--primary')
	} else {
		inputText.classList.remove('input__text--primary')
	}
})





