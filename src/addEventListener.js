import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<div id="app"></div>
<button type="button" class="One Two">
    Click me!
</button>
`
const button = document.querySelector('button')
function handleClick(event){
    console.log(this, event.target);
}

button.addEventListener('click',handleClick)
button.addEventListener('click', () => {
    console.log('3');
})

button.addEventListener('dblclick',()=>{
    console.log('Double-clicked');
})
