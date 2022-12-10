// task 1
let arr = ['455', 87.15, true, undefined, 7, null, 'false', [], {}]


for (key of arr) {
	console.log(`typeof:  ${typeof key}`)
	
	if (!isNaN(key)) {
		key += 3;
		console.log(key);
	}
}
