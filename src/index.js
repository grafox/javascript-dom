import '../assets/css/style.css';


// app.innerHTML = `<h1>Javascript DOM</h1>`;

/* document.addEventListener('DomContentloaded',()=>{
    alert('DomContentloaded')
})
window.addEventListener('load',()=>alert('load'))
*/
/* console.log(document.documentElement)
console.dir(document.documentElement)

console.log(document.head)
console.dir(document.body)
console.log(document.body.constructor.name)
console.log(document.body)
 */
const app = document.getElementById('app');

const div = document.createElement('div')
const text = document.createTextNode('DOM!')
const commet = document.createComment('No commet')
app.append(div)
app.append(commet)

div.append(text)

console.log(app,div,text)

