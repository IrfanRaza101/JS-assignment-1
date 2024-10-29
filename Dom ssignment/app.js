var idCount = 1;

function addTodo() {
    var todos = document.getElementById('todos');
    var inpVal = document.getElementById('inp');

  todos.style.cssText = " display: flex;flex-wrap: wrap;justify-content: center;gap: 15px; margin-top: 20px; width: 100%; max-width: 1600px;"
    
    if (inpVal.value.trim() === "") {
        alert("kuch likh to lo bhai");
        return;
    }

    var element = document.createElement('div');
    element.setAttribute('id', idCount);
    element.setAttribute('class', "todo");

    element.style.cssText = " width: 250px; background-color: #ffffff; color: #333; border: 2px solid #333; border-radius: 6px; text-align: center; padding: 15px; box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.2); transition: transform 0.3s;";

    element.innerHTML = `
        <p>${inpVal.value}</p> 
        <button onclick="deleteTodo(${idCount})">Delete</button> 
        <button onclick="updateTodo(${idCount})">Update</button>
        `;

    todos.appendChild(element);

    idCount += 1;  
    inpVal.value = ""; 
}

function deleteTodo(id) {
    var deletedItem = document.getElementById(id);
    if (deletedItem) {
        deletedItem.remove();
    }
}

function updateTodo(id) {
    var inpVal = document.getElementById('inp');
    var todoItem = document.getElementById(id);

    if (inpVal.value.trim() === "") {
        alert("Awin update kardu! phele kuch likh to lo bhai");
        return;
    }

    if (todoItem) {
        todoItem.innerHTML = `
            <p>${inpVal.value}</p> 
            <button onclick="deleteTodo(${id})">Delete</button> 
            <button onclick="updateTodo(${id})">Update</button>
        `;
    }
}




