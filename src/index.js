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

/* const div = document.createElement('div')
const text = document.createTextNode('DOM!')
const commet = document.createComment('No commet')
app.append(div)
app.append(commet)
div.append(text)
app.append('h1')
console.log(app,div,text)
console.log(app.innerHTML)
console.log(app.textContent)

app.innerText = '<span> Hello</span>'
app.innerHTML = '<span> Hello</span>'
 */
function createInputDOM({label,type='text'}){
    const labelEl = document.createElement('label')
    const inputEl = document.createElement('input')

    inputEl.type = type
    labelEl.innerText = label
    labelEl.append(inputEl)
    return labelEl
}

const inputFromDom = createInputDOM({label:'name',})
console.log(inputFromDom)
app.append(inputFromDom)

function createInputTemplate({label,type='text'}){
    return`
    <label>
    ${label}
    <input type="${type}"
    </label>
    `
}
const inputFromTemplate = createInputTemplate({label:'Email',type:'email'})

app.innerHTML += inputFromTemplate