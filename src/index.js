import '../assets/css/style.css';

const app = document.getElementById('app');

app.innerHTML = `<h1>Javascript DOM</h1>`;

/* document.addEventListener('DomContentloaded',()=>{
    alert('DomContentloaded')
})
window.addEventListener('load',()=>alert('load'))
*/
console.log(document.documentElement)
console.dir(document.documentElement)

console.log(document.head)
console.dir(document.body)
console.log(document.body.constructor.name)
console.log(document.body)
