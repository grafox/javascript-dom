import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<form name="order">
        <label>Your name
        <input type="text" name="fullname" >
        </label>
        <label>Your email
        <input type="email" name="email" >
        </label>
    </form>
`
const form = document.forms.order
const {fullname,email} = form.elements

function handleInput(event){
    // access the value
    console.log(event.target.value)
    // access the form
    console.log(event.target.form);
}

fullname.addEventListener('input',handleInput)
email.addEventListener('change',handleInput)
