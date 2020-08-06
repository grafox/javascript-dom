import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<div id="app"></div>
<button type="button" class="One Two">
    Click me!
</button>
`
const button = document.querySelector('button')
button.className +=' Three'
// old way
console.log(button.className);
console.log(button.className.split('  '));
// Add class
button.classList.add('four')
// remove class
button.classList.remove('one')
// Toggle
button.classList.toggle('five')

button.classList.replace('two','six')

