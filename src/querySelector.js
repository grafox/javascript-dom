import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<ul id="list"></ul>
`
const data =['Earth','Fire','Water']
const fargment = document.createDocumentFragment()

data.forEach(item =>{
    const li=document.createElement('li')
    li.className = 'list-item'
    li.innerText = item
    fargment.append(li)
})

//ul { Background:red}
const ulFromQuerySelector = document.querySelector('#list')
console.log(ulFromQuerySelector);

ulFromQuerySelector.append(fargment)
const listItemsFromQSA = ulFromQuerySelector.querySelectorAll('.list-item')
console.log(listItemsFromQSA);

const newListItem = document.createElement('li')
newListItem.className = 'list-item'
newListItem.innerText = 'Air'

console.log(listItemsFromQSA);