//your JS code here. If required.
const output = document.getElementById("output");
const message = document.getElementById("text");
const delayInSec = document.getElementById("delay");
const submit = document.getElementById("btn");
function getMessage(){
	return new Promise((resolve)=>{
		const text = message.value;
		const delay = parseInt(delayInSec.value);
		setTimeout(()=>resolve(text),delay*1000);
	});
}
async function showMessage(){
	const message = await getMessage();
	output.innerHTML = message;
}
submit.addEventListener("click",()=>{
	showMessage();
})