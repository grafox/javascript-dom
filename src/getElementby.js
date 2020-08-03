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

//getElementById: HTMLElement
const ulFromId = document.getElementById('list')
console.log(ulFromId);
ulFromId.append(fargment)

// getlementByClassName: ulFromId
const listItemsFromClassName = ulFromId.getElementsByClassName('list-item')
console.log(listItemsFromClassName);

// getlementByTagName: ulFromId
const listItemsFromTagName = ulFromId.getElementsByTagName('list-item')
console.log(listItemsFromTagName);

const newListItem = document.createElement('li')
newListItem.className= 'list-item'
newListItem.innerText='Air'
ulFromId.append(newListItem)

console.log(listItemsFromClassName);
console.log(listItemsFromTagName);
