import { editTodoDialog } from "./dialogs/editTodoDialog";
export default function createTodoCard(todo, projectName) {
    const card = document.createElement('div');
    card.classList.add('todoCard');
    card.setAttribute('data-title', todo.title)

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

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Todo';
    editBtn.classList.add('editTodoBtn');
    editBtn.setAttribute('data-title', todo.title);
    editBtn.setAttribute('data-projectName', projectName)

    const notesBtn = document.createElement('button');
    notesBtn.classList.add('notesBtn');
    notesBtn.setAttribute('data-title', todo.title);
    notesBtn.setAttribute('data-projectname', projectName);
    notesBtn.textContent = 'Notes';

    const checklistBtn = document.createElement('button');
    checklistBtn.classList.add('checklistBtn');
    checklistBtn.setAttribute('data-title', todo.title);
    checklistBtn.setAttribute('data-projectname', projectName);
    checklistBtn.textContent = "Checklist";

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(priority);
    card.appendChild(dueDate);
    card.appendChild(editBtn)
    card.appendChild(notesBtn);
    card.appendChild(checklistBtn)
    



    return card;
}