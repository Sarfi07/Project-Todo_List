import createTodoCard from './../utility/createTodoCard';
import createTodoDialog from '../utility/dialogs/newTodoDialog';
import { descriptionEditDialog, dueDateEditDialog, priorityEditDialog, titleEditDialog } from '../utility/dialogs/editTodoSection';
import { editTodoDialog } from '../utility/dialogs/editTodoDialog';
import changeProjectNameDialog from '../utility/dialogs/editProjectDialog';
import notesDialog from '../utility/dialogs/notesDialog';
import checklistDialog from '../utility/dialogs/checklistDialog';
import { newChecklistDialog } from '../utility/dialogs/newChecklistDialog';
import editNoteDialog from '../utility/dialogs/editNoteDialog';

function createHomeBody(currentProject) {
    const homeBody = document.createElement('div');
    homeBody.setAttribute('id', 'homeBody');
    homeBody.classList.add('homeBody');

    const newTodoBtn = document.createElement('button');
    newTodoBtn.textContent = '+ Todo';
    newTodoBtn.setAttribute('id', 'addTodoBtn');


    const heading = document.createElement('h1');
    heading.textContent = currentProject.name;
    heading.classList.add('projectHeading');

    const projectUpdateBtn = document.createElement('button');
    projectUpdateBtn.textContent = 'Change Name';
    projectUpdateBtn.setAttribute('data-projectname', currentProject.name);
    projectUpdateBtn.setAttribute('id', 'projectNameUpdateBtn');
    heading.appendChild(projectUpdateBtn);

    const todoCards = document.createElement('div');
    todoCards.setAttribute('id', 'todoContainer');



    for (let i = 0; i < currentProject.todos.length; i++) {
        todoCards.appendChild(createTodoCard(currentProject.todos[i], currentProject.name));
    }

    homeBody.append(editNoteDialog())
    homeBody.appendChild(newChecklistDialog())
    homeBody.appendChild(checklistDialog());
    homeBody.appendChild(notesDialog())
    homeBody.appendChild(changeProjectNameDialog());
    homeBody.appendChild(editTodoDialog())
    homeBody.appendChild(descriptionEditDialog());
    homeBody.appendChild(priorityEditDialog());
    homeBody.appendChild(dueDateEditDialog());  
    homeBody.appendChild(createTodoDialog(currentProject.name));
    homeBody.appendChild(titleEditDialog());
    homeBody.appendChild(heading);
    homeBody.appendChild(newTodoBtn);
    homeBody.appendChild(todoCards);

    return homeBody
}

function changeHomeBody(project) {
    const container = document.getElementById('container');
    const oldBody = document.getElementById('homeBody');

    const newHomeBody = createHomeBody(project);

    container.removeChild(oldBody);
    container.appendChild(newHomeBody);

}


export { createHomeBody, changeHomeBody }