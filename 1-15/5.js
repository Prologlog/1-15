let table = document.querySelector('#table');
let elem = document.querySelector('#elem');
let l = 1
let gg = false
let timerId = setInterval(function() {
	elem.value = Number(elem.value) - 1;
	if(elem.value == 0){
		elem.value = 0
		clearInterval(timerId);
		gg = true;
            for (let j = 0; j < table; j++) {
                table[j].removeEventListener('click', func);
			}
	}
}, 1000);
let arr = [Math.floor(Math.random() * (100 - 1 + 1)) + 1,Math.floor(Math.random() * (100 - 1 + 1)) + 1,Math.floor(Math.random() * (100 - 1 + 1)) + 1,Math.floor(Math.random() * (100 - 1 + 1)) + 1,Math.floor(Math.random() * (100 - 1 + 1)) + 1,Math.floor(Math.random() * (100 - 1 + 1)) + 1,Math.floor(Math.random() * (100 - 1 + 1)) + 1,Math.floor(Math.random() * (100 - 1 + 1)) + 1,Math.floor(Math.random() * (100 - 1 + 1)) + 1,Math.floor(Math.random() * (100 - 1 + 1)) + 1]
for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	for (let i = 0; i < 10; i++) {
		let td = document.createElement('td');
        td.textContent = l
        l++
		
		td.addEventListener('click',func)
		function func(){
			if(gg){
				return
			}
			if(td.textContent == arr[0]){
				td.style.backgroundColor = 'green'

			}
			if(td.textContent == arr[1]){
				td.style.backgroundColor = 'green'

			}
			if(td.textContent == arr[2]){
				td.style.backgroundColor = 'green'

			}
			if(td.textContent == arr[3]){
				td.style.backgroundColor = 'green'

			}
			if(td.textContent == arr[4]){
				td.style.backgroundColor = 'green'

			}
			if(td.textContent == arr[5]){
				td.style.backgroundColor = 'green'

			}
			if(td.textContent == arr[6]){
				td.style.backgroundColor = 'green'

			}
			if(td.textContent == arr[7]){
				td.style.backgroundColor = 'green'

			}
			if(td.textContent == arr[8]){
				td.style.backgroundColor = 'green'

			}
			if(td.textContent == arr[9]){
				td.style.backgroundColor = 'green'

			}
	
		}
		tr.appendChild(td);
		
		
		
	}
	table.appendChild(tr);
	
}
console.log(arr)