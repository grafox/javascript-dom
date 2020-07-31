import '../assets/css/style.css';

const app = document.getElementById('app');

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

const data = ['Earth','fire','water','Air']
const fragment = document.createDocumentFragment()
console.dir(fragment)

data.forEach(name=>{
    const li = document.createElement('li')
    li.innerText = name
  //  app.append(li)
    fragment.append(li)
})

app.append(fragment)