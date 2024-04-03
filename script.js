const todolist = document.getElementById("todo-list");

const handleTodo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (response.status === 200) {
            const data = await response.json();
            displayTodos(data);
        } else {
            console.error('No data found');  // Handle the 'no data found' error
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayTodos = (todos) => {
    todos.forEach((todo) => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');

        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked;
            listItem.classList.toggle('completed');
        });

        label.textContent = todo.title;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        if (todo.completed) {
            listItem.classList.add('completed');
        }

        todolist.appendChild(listItem);
    });
};

handleTodo();
