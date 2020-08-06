import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<input type="text">
`
const input = document.querySelector('input')
//input.value = 2
input.setAttribute('value',3)
console.log(input.value);
console.log(parseInt(input.value,10));

//console.dir(input);
