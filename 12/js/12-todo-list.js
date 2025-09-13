const todoList =  [{
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
}


function renderTodoList() {

    let todoListHTML = '';
    
    todoList.forEach(function(todoObject, index){
        const {name, dueDate} = todoObject;
        const html = `
            <div>
                ${name}
            </div>
            <div>
                ${dueDate}
            </div> 
            <button onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
            " class="delete-todo-btn">Delete</button>            
        `;
        todoListHTML += html;
    
        document.querySelector('.todo-list').innerHTML = todoListHTML;
    });

}
