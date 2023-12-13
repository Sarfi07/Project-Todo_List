import { addTodoToLs } from "./updateLocalStorage";
import createTodo from "./createTodo";
import createHomeBody from "./body";

function createDialog(projectTitle) {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'addTodoDialog');

    const form = document.createElement('form');
    form.setAttribute('id', 'addTodoForm');
    form.setAttribute('method', 'dialog');


    const fieldset = document.createElement('fieldset');

    const legend = document.createElement('legend');
    legend.textContent = "Add New Todo";
    fieldset.appendChild(legend);

    const divsRequired = ['title', 'description', 'priority', 'dueDate'];
    for (let i = 0; i < 4; i++) {
        const newDiv = createDiv(divsRequired[i]);

        fieldset.appendChild(newDiv);
    }

    
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Submit';

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('formmethod', 'dialog');
    cancelBtn.classList.add('btn');
    cancelBtn.textContent = 'Cancel'

    // hidden input for project title
    const hiddenTitle = document.createElement('input');
    hiddenTitle.setAttribute('type', 'hidden');
    hiddenTitle.textContent = projectTitle;

    form.appendChild(hiddenTitle);
    form.appendChild(fieldset);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);

    dialog.appendChild(form);

    return dialog;

    
    function createDiv(name, type) {
        const div = document.createElement('div');
        div.classList.add(`input${name}`);

        const label = document.createElement('label');
        label.textContent = name;
        label.setAttribute('for', name);

        const input = document.createElement('input');
        input.setAttribute('id', name);
        input.setAttribute('type', type);

        div.appendChild(label);
        div.appendChild(input);

        return div;
    }

}


function submitDialog(projectTitle) {
    const newTodo = pushTodo();

    addTodoToLs(projectTitle, newTodo);

    updateHomeBody(projectTitle);
}


function createTodoCard(todo) {
    const card = document.createElement('div');
    card.classList.add('todoCard');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = `Title: ${todo.title}`;

    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = todo.description;

    const priority = document.createElement('p');
    priority.classList.add('priorityP');
    priority.textContent = todo.priority;

    const dueDate = document.createElement('p');
    dueDate.classList.add('dueDateP');
    dueDate.textContent = todo.dueDate;

    const notes = 


    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(priority);
    card.appendChild(dueDate);


    return card;
}


function pushTodo() {
    const title = document.getElementById('title').value;
    const desc = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;
    

    const newTodo = createTodo(title, desc, priority, dueDate);

    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    document.getElementById('priority').value = "";
    document.getElementById('dueDate').value = "";


    return newTodo
}

function updateHomeBody(title) {
    const content = document.getElementById('content');

    const oldBody = document.getElementById('homeBody');

    const newDialog = createDialog(title);

    const projects = JSON.parse(localStorage.getItem('Projects'));
    let currentProject;

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == title) {
            currentProject = projects[i];
        }
    }
    
    const newBody = createHomeBody(currentProject);
    newBody.appendChild(newDialog);
    
    content.removeChild(oldBody);
    content.appendChild(newBody);


}


export {createDialog, submitDialog, createTodoCard, updateHomeBody}


