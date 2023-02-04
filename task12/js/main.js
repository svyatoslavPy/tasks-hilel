document.body.onload = changeLight;

const circles = document.querySelectorAll('.block-inner__circle');
const btnWalk = document.getElementById('btn__walk');

let activeLight = 0;
let interval;

function changeLight() {
	interval = setInterval(() => {
		circles[activeLight].className = 'block-inner__circle';
		activeLight++;

		if (activeLight > 2) {
			activeLight = 0;
		}

		circles[activeLight].classList.add(circles[activeLight].getAttribute("color")); //
	}, 5000)
}

btnWalk.addEventListener('click', () => {
	clearInterval(interval);
	let counter = 10;
	let blockText = document.querySelector('.block__text');

	let pointer = setInterval(() => {
		counter--;
		blockText.innerHTML = `Counts: ${counter}`;
		if (counter > 0) {
			btnWalk.disabled = true;
			circles[activeLight].classList.remove(circles[activeLight].getAttribute("color"));
			circles[0].classList.add(circles[0].getAttribute('color'));
		} else {
			clearInterval(pointer);
			circles[0].classList.remove(circles[0].getAttribute('color'));
			btnWalk.disabled = false;
		}
	}, 1000)

	setTimeout(() => {
		activeLight = 0;
		changeLight();
	}, 5000);

})



