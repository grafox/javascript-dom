import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<div class ="item"></div>
`
const item = document.querySelector('.item')

console.log(item.parentNode);
console.log(item.parentElement.parentElement);

console.log(item.closest('#app'));
console.log(item.closest('body'));