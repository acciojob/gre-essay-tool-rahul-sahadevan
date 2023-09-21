//your code here
const h3 = document.getElementById("wordCount");
const input = document.getElementById("evaluatedText");
let count = 0;
h3.innerText = count;
input.addEventListener("keydown",(event)=>{
	let key = event.key;
	if(key === " "){
		count++;
		h3.innerText = count;
	}
})
