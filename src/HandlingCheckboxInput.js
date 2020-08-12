import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<form name="test">
    <label>
    Accept Marketing
    <input type="checkbox" name="marketing">
    </label>
</form>
`
const form = document.forms.test
const checkbox = form.elements.marketing
// set
checkbox.checked = true
// get
console.log(checkbox.checked);
// Events
checkbox.addEventListener('change',()=>{
    console.log(checkbox.checked);
    console.log(checkbox.value);
})

// Method