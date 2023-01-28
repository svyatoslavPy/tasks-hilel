const wrapper = document.querySelector('.date');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

async function getDate() {
	const responce = await fetch(`https://rickandmortyapi.com/api/character?page=1`)
	const date = await responce.json();


	// btnNext.addEventListener('click', () => {
	// 	console.log(date.info.next);
	// })

	date.results.forEach(item => {
		wrapper.innerHTML += `<p>${item.name}</p>
    <p>${item.status}</p>`;
	})
}

getDate();



