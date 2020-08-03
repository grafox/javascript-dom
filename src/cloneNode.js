import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>

`
const div = document.createElement('div')
const span = document.createElement('span')

span.innerText = 'Can you clone me'
app.append(div)

//cloneNode(false) only clons the top element 
const clone = div.cloneNode()
console.log(clone);
//cloneNode(true) all elements and subtrees
const newClone = div.cloneNode(true)
console.log(newClone);

app.append(newClone)