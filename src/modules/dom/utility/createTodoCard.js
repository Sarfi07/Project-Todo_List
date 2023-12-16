import { format } from "date-fns";
import { editTodoDialog } from "./dialogs/editTodoDialog";
export default function createTodoCard(todo, projectName) {
    const card = document.createElement('div');
    card.classList.add('todoCard');
    card.setAttribute('data-title', todo.title)

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = `${todo.title}`;

    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = todo.description;

    const priority = document.createElement('p');
    priority.classList.add('priorityP');
    priority.textContent = todo.priority;

    const dueDate = document.createElement('p');
    dueDate.classList.add('dueDateP');
    const d = new Date(todo.dueDate)
    console.log()
    dueDate.textContent = format(d, 'MMMM do yyyy');

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

    const cardItems = document.createElement('div');
    cardItems.classList.add('cardItems');

    cardItems.appendChild(title);
    cardItems.appendChild(desc);
    cardItems.appendChild(priority);
    cardItems.appendChild(dueDate);
    card.appendChild(cardItems)
    card.appendChild(editBtn)
    card.appendChild(notesBtn);
    card.appendChild(checklistBtn)
    



    return card;
}