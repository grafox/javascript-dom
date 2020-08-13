import '../assets/css/style.css';

const app = document.getElementById('app')
app.innerHTML = `
    <div class="todos">
        <div class="todos-header">
            <h3 class="Todo List">Todo List</h3>
            <div>
                <p>You have <span class="="todos-count>items</span></p>
                <button type="button" class="todos-clear" style="display:none">
                Clear Completed</button>
            </div>
        </div>
            <form class="todos-form" name="todos">
            <input type="text" Placeholder="What's next" name="todo">
        </form>
     <ul class="todos-list"></ul>
    </div>
`
// state
//let todos = []
let todos = JSON.parse(localStorage.getItem('todos')) ||[]

// selectors
const root = document.querySelector('.todos')
const list = root.querySelector('.todos-list')
const count = root.querySelector('.todos-count')
const clear = root.querySelector('.todos-clear')
const form = document.forms.todos
const input = form.elements.todo

// functions
function saveToStorage(todos){
    localStorage.setItem('todos',JSON.stringify(todos))
}

function renderTodos(todos){
    //<li>
    let todoString=''
    todos.forEach((todo,index)=>{
        todoString += `
        <li data-id="${index}"${todo.complete ? ' class="todos-complete"':''}>
            <input type="checkbox"${todo.complete ? ' checked':''}>
            <span>${todo.label}</span>
            <button type="button"></button>
        </li>
        `
    })
    list.innerHTML = todoString
    count.innerText = todos.filter(todo=>!todo.complete).length
    clear.style.display = todos.filter(todo=>todo.complete).length ? 'block' : 'none'
}

function addTodo(event){
    event.preventDefault()
    const label = input.value.trim()
    const complete = false
    todos = [...todos,{label,complete}]
    renderTodos(todos)
    saveToStorage(todos)
    input.value = ''
}

function updateTodo(event){
    const id = parseInt(event.target.parentNode.getAttribute('data-id'),10)
    const complete = event.target.checked
    todos = todos.map((todo,index)=>{
        if(index===id){
            return {
                ...todo,complete
            }
        }
        return todo
    })
    renderTodos(todos)
    saveToStorage(todos)

}

function deleteTodo(event){
    if(event.target.nodeName.toLowerCase() !== 'button'){
        return
    }
    const id = parseInt(event.target.parentNode.getAttribute('data-id'),10)
    const label = event.target.previousElementSibling.innerText
    if(window.confirm(`Delete ${label}?`)){
        todos = todos.filter((todo,index)=> index !== id)
        renderTodos(todos)
    }
}

function clearCompleteTodos(){
    const count = todos.filter(todo => todo.complete).length
    if(count === 0){
        return
    }
    if(window.confirm(`Delete ${count} todos?`)){
        todos = todos.filter(todo =>!todo.complete)
        renderTodos(todos)
        saveToStorage(todos)
    }
}
// init
function init(){
    renderTodos(todos)
    // add Todo
    form.addEventListener('submit',addTodo)
    // update todo
    list.addEventListener('change',updateTodo)
    // delete
    list.addEventListener('click',deleteTodo)
    // complete all todos
    clear.addEventListener('click',clearCompleteTodos)
}

init()
