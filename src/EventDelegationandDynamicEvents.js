import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<div id="app"></div>
    <button>Add Items</button>
        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
`
const list = document.querySelector('#list')
const items = list.querySelectorAll('li')
const button = document.querySelector('button')

function handleClick(event){
    console.log(event.target.innerText);
}

items.forEach(item =>{
    item.addEventListener('click',handleClick)
})

button.addEventListener('click',()=>{
    const li=document.createElement('li')
    li.innerText = `Item` 
    li.addEventListener('click',handleClick)
    list.append(li)
})