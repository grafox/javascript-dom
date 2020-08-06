import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
    <ul id="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
`
const listItem = document.querySelector('#list li')
console.log(listItem.nextSibling)
console.log(listItem.previousSibling)

console.log(listItem.nextElementSibling)
console.log(listItem.previousElementSibling)
