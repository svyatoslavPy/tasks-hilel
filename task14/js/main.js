const wrapper = document.querySelector('.date');
// date 
const btnPrev = document.getElementById('btn-prev');
// btn-prev
const btnNext = document.getElementById('btn-next');
// btn-next

const currentPages = document.querySelector('.current-page'); // текущая странница 

async function getDate(link) {
	let responce = await fetch(link);
	let date = await responce.json();

	date.results.forEach(item => {
		wrapper.innerHTML += `
			<div class="date-btn"><p>${item.id}</p><p>${item.name}</p><p>${item.status}</p></div>
	`	;
	})
}

let currentPage = 1; // текущая странница(счётчик)

getDate(`https://rickandmortyapi.com/api/character?page=1`);

btnPrev.addEventListener('click', () => {
	wrapper.innerHTML = "";
	if (currentPage > 1) {
		currentPage--;
	}

	// if (currentPage < 42) {
	// 	btnNext.disabled = false;
	// }

	getDate(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
	const urlParams = new URL(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
	const page = urlParams.searchParams.get('page')
	currentPages.innerHTML = page;
})

btnNext.addEventListener('click', () => {
	wrapper.innerHTML = "";
	currentPage++;

	// if (currentPage >= 42) {
	// 	btnNext.disabled = true;
	// }

	getDate(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
	const urlParams = new URL(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
	const page = urlParams.searchParams.get('page')
	currentPages.innerHTML = page;
})



