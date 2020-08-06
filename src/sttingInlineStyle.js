import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `<h1>Javascript DOM</h1>
<div id="app"></div>
<button type="button" aria-label="Close this Modal">
    Close Me
</button>
`
const button = document.querySelector('button')
// Set
button.setAttribute('aria-label','Close this Modal')
const value = button.getAttribute('aria-label')
console.log(value);
//.attributes
console.log(button.attributes['aria-label']);
// <button style="padding: 25px margin:10px 0"
console.dir(button.style);
// cssText
button.style.cssText = 'padding: 25px; margin:10px 0;font-size:20px'
// direct property access
button.style.fontSize='22px'
console.log(button.style.fontSize);