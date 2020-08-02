import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
    <ul>
    <li>1</li>
    </ul>  
`
const ul = app.querySelector('ul')
ul.insertAdjacentHTML('beforebegin',' <p>Before</p>') // faster than innerHTML
ul.insertAdjacentHTML('afterbegin',' <li>First</li>')
ul.insertAdjacentHTML('beforeend',' <li>Last</li>')
ul.insertAdjacentHTML('afterend',' <li>After</li>')

