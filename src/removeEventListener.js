import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<div id="app"></div>
<button type="button" class="One Two">
    Click me!
</button>
`
const button = document.querySelector('button')

function handleClickOnce(event){
    console.log(event.target);
    setTimeout(()=>{
        button.removeEventListener('click',handleClickOnce)
        console.log('removeEvent');
    },5000)
}

button.addEventListener('click', handleClickOnce)
