import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<div>
    Replace me
</div>
`
const div =app.querySelector('div')
const newDiv = document.createElement('div')
newDiv.innerText='i have been replaced'
// new way
div.replaceWith(newDiv)

const anotherDiv = document.createElement('div')
anotherDiv.innerText = 'Hello'
setTimeout(()=>{
    newDiv.parentNode.replaceChild(anotherDiv,newDiv)
},2000)
