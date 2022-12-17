 /*  My js tasks
              .'  '. 
             :      :
             | _  _ |
          .-.|(o)(o)|.-.        
         ( ( | .--. | ) )     
          '-/ (    ) \-'     
           /   '--'   \     
           \ `"===="` /     
            `\      /'            
              `\  /'              
              /`-.-`\_            
        _..:;\._/V\_./:;.._       
      .'/;:;:;\ /^\ /:;:;:\'.    
     / /;:;:;:;\| |/:;:;:;:\ \   
    / /;:;:;:;:;\_/:;:;:;:;:\ \ */

		
// task
const array = [];
let sum = 0;

for (let i = 0; i < 15; i++) {
	array[i] = (Math.floor(Math.random() * 20));
}

const result = array.filter((arr) => {
	if (arr % 3 === 0) {
		return arr;
	} else if (arr % 2 === 0) {
		sum += arr;
		return sum;
	} else if (arr[0] > 7) {
		return arr;
	} else {
		console.log('All elements less than 7');
	}
});
console.log(`Array filter: ${result}`);

const modifiedArr = array.map(val => val * 2);

const deleteVal = array.shift();
console.log(`Return delete-val: ${deleteVal}`)

const AddVal = array.pop();
console.log(`Return add-val: ${AddVal}`);


console.log(`arr 15 element: ${array}`);
console.log(`Arr in which val multiplied by 2: ${modifiedArr}`);





























