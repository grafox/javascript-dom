import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<form name="test">
<input type="text" name="myInput" value="Hello">
</form>
`
const form = document.forms.test
const input = form.myInput

// properties that are useful
console.dir(input);
// set
input.value = 'Goodbye'
/* input.readOnly = true
input.disable = true */
// get 
console.log(input.value);

// Events
input.addEventListener('focus', ()=> console.log('Focus'))
input.addEventListener('blur', ()=> console.log('Blur'))
input.addEventListener('input', ()=> console.log('Input'))
input.addEventListener('change', ()=> console.log('Change'))

// Methods
// focus an input
input.focus(()=> input.blur(),2000)