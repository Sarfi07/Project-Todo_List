import createTodo from "./createTodo";
import { addTodoToLs } from "./updateLocalStorage";
import { createTodoCard } from "./dialog";

export default function createHomeBody(currentProject) {
    const homeBody = document.createElement('div');
    homeBody.setAttribute('id', 'homeBody');
    homeBody.classList.add('homeBody');

    const newTodoBtn = document.createElement('button');
    newTodoBtn.textContent = '+ Todo';
    newTodoBtn.setAttribute('id', 'addTodoBtn');


    const heading = document.createElement('h1');
    heading.textContent = currentProject.name;
    heading.classList.add('projectHeading');

    const todoCards = document.createElement('div');
    todoCards.setAttribute('id', 'todoContainer');

    for (let i = 0; i < currentProject.todos.length; i++) {

        todoCards.appendChild(createTodoCard(currentProject.todos[i]));

    }
    
    homeBody.appendChild(heading);
    homeBody.appendChild(newTodoBtn);
    homeBody.appendChild(todoCards);

    return homeBody
}


