import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<div id="app"></div>
<form>
<label>Sign-up Email
  <input type="email">
</label>
<label> I agree to thterms
  <input type="checkbox">
</label>
</form>
`
const form = document.querySelector('form')
const email = form.querySelector('input[type="emai"]')
const checkbox = form.querySelector('input[type="checkbox]')

function handleSubmit(event){
    if(checkbox.checked){
        event.preventDefault(event)
        console.log(event);
        console.log(email.value,checkbox.checked);
        return true
    }
    console.log('Submitted',email.value);
}
form.addEventListener('submit',handleSubmit)

/* checkbox.addEventListener('click',event =>{
    event.preventDefault()
}) */