let input = document.querySelector('.input');
let out = document.querySelector('#out');

let div = document.querySelector('.div');

let button = document.querySelector('button');

let input2 = document.querySelector('.input-hidden');

let rec = document.querySelectorAll('.rec');

let arr =[];


document.addEventListener('keydown', function(event) {
	
  if (event.code == 'NumpadEnter' || event.code == 'Enter') {
	  let token = document.createElement('span');
	  let text = document.createElement('span');
	  
	  token.classList.add('components-form-token-field__token');
	  
	  text.classList.add('field__token-text');
	  
	  text.innerText = input.value;
	  
	  token.append(text);
	  
	  div.insertBefore(token, input)
	  pushing()
   input.value = "";
  } else if(event.code == 'Backspace'){
	  // deleteLast()
  }
});





function pushing(){
	let texts = document.querySelectorAll('.field__token-text');
	
	texts.forEach(el=>{
		let words = el.textContent.toLowerCase()
			
		
			if(arr.indexOf(words) != -1 ) return
		
		console.log(arr.indexOf(words))
		arr.push(words)
		
	})
	
		console.log(arr)
		
	out.innerHTML = arr
	let str = arr.join(" ")
	input2.setAttribute('value', str.trim())
	// rmv()

}


// function rmv(){
// 		let r = document.querySelectorAll('.field__token-text');
// 	// arr.pop()
// 	r.forEach(el=>{
// 		el.addEventListener('click', e=>{
// 				e.target.remove();
// 			 let words = el.textContent.toLowerCase()
// 			 arr.push(words)
// 			})
// 		let str = arr.join(" ")
// 		input2.setAttribute('value', str)
// 	})
// }


button.addEventListener('click', search);

function search(){
	let items = input2.value;
	
	
	rec.forEach(el=>{
		let str = el.textContent;
		if(str.includes(items) == true){
			out.innerHTML = el.textContent;
		}
		
	})
	
	
	
}
