import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<ul id="list">
    <li>Earth</li>
    <li>Fire</li>
    <li>Water</li>
    <li>Air</li>
</ul>
`
const list = document.querySelector('#list')
const selectedIndex = 2
//querySelectorAll
const queryChildern = list.querySelectorAll('li')
console.log(queryChildern,queryChildern.length)
//.children: HTMLCollection
console.log(list.children);
//.childNodes: NodeList
console.log(list.childNodes);

console.log(list.children[selectedIndex]);
