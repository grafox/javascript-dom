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
        <input type="text" name="fullname">
        </label>
        <div>
        What Size?
            <label>
            Small
            <input type="radio" name="size" value="small" checked>
            </label>
            <label>
            Medium
            <input type="radio" name="size" value="medium">
            </label>
            <label>
            Large
            <input type="radio" name="size" value="large">
            </label>
      </div>
      <label>
      Quantity
      <input type="number" name="quantity" value="1">
        </label>
        <button type="submit">Submit</button>
    </form>
`
const form = document.forms.order

function handleSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.target)

    //query string
    // Content-Type = application/x-www-form-URLencoded
    // fullname=Gassan+Jabbar&pizza=pepperoni&size=large&quary
  /*  const data = [... formData]
    // console.log(data);
     const asString = data
    .map(x=> `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join('&') */

    const asString = new URLSearchParams(formData).toString()
    console.log(asString);

    //json
    const asJSON = JSON.stringify(Object.fromEntries(formData))
    console.log(asJSON);
}

form.addEventListener('submit',handleSubmit)

