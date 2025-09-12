const todoList = JSON.parse(localStorage.getItem('todoList')) ||  [{
    name:'make dinner',
    dueDate: '12-09-2025',
},{    
    name: 'wash dishes',
    dueDate: '13-09-2025',
}];

renderTodoList();


function addTodo() {
    
    const inputElement = document.querySelector('.todo-input1');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoList.push({
        // name: name,
        // dueDate: dueDate,
        name,
        dueDate
    });
    
    
    inputElement.value = '';
    renderTodoList();
    saveToStorage()
}


function renderTodoList() {
    
    let todoListHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        const html = `
        <div>
        ${name}
        </div>
        <div>
        ${dueDate}
        </div> 
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-btn">Delete</button>            
        `;
        todoListHTML += html;
        
        document.querySelector('.todo-list').innerHTML = todoListHTML;
    }

}

function saveToStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList));

}
