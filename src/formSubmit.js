import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<form name="order">
        <label>Your name
        <input type="text" name="fullname" >
        </label>
        <label>
            Which one you like?
            <select name="Letters">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        <input type="text" name="fullname" >
        </label>
        <button type="submit">Submit</button>
    </form>
`
const form = document.forms.order

function handleSubmit(){
    event.preventDefault()
    console.log([... new FormData(event.target)]);
}

function handleFormData(event){
    console.log([... event.formData])
    console.log([... event.formData.values()])
    console.log([... event.formData.entries()])
    const entries = event.formData.entries()
    for(const entry of entries){
        console.log(entry);
    }
}

form.addEventListener('submit',handleSubmit)
form.addEventListener('formdata',handleFormData)
