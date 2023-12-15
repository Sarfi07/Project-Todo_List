import getProject from "../../../localStorage/getProject";
import getTodo from "../../../localStorage/getTodo";
import updateProjectName from "../../../projects/updateProject";
import { updateChecklist, updateDescription, updateDuedate, updateNotes, updatePriority, updateTitle } from "../../../todos/update";
import updateDom from "../../page/updateDom";
import { editTitleDialog } from "./editTodoSection";


export default function showDialogs() {
    const createTodoBtn = document.getElementById('addTodoBtn');
    const dialog = document.getElementById('addTodoDialog');
    createTodoBtn.addEventListener('click', () => {
        dialog.showModal();
    })


    const createProjectBtn = document.getElementById('createProjectBtn');
    const projectDialog = document.getElementById('addProjectDialog');
    createProjectBtn.addEventListener('click', () => {
        projectDialog.showModal();
    })

    showEditTodoDialog();
    showNotesDialog();
    showEditProjectNameDialog();
    showChecklistDialog();


}

function showEditTodoDialog() {
    const btns = document.querySelectorAll('button.editTodoBtn');
    const dialog = document.getElementById('editTodoDialog');
    const form = document.getElementById('editTodoForm');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            dialog.setAttribute('data-title', btn.dataset.title);
            dialog.setAttribute('data-projectname', btn.dataset.projectname);
            dialog.showModal();

        })
    })

    const cancelBtns = document.querySelectorAll('button.cancelBtn');

    cancelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // todo
        })
    })


    form.addEventListener('submit', () => {
        let key = document.getElementById('reviseKey').value;
        const sectionDialog = document.getElementById(`${key}EditDialog`);

        try {
            sectionDialog.showModal();
        } catch (error) {
            return;
        }

        sectionDialog.addEventListener('submit', () => {
            const projectName = dialog.dataset.projectname;
            const title = dialog.dataset.title;
            if (key == 'title') {
                const oldTitle = title
                const newTitle = document.getElementById('newTitle').value;

                updateTitle(projectName, oldTitle, newTitle);
                updateDom(projectName)

                console.log(oldTitle, newTitle)
            }
            else if (key == 'description') {
                const newDesc = document.getElementById('newDescription').value;

                updateDescription(projectName, title, newDesc);
                updateDom(projectName);
                console.log('description submitted')
            }
            else if (key == 'priority') {
                const newPriority = document.getElementById('newPriority').value;

                updatePriority(projectName, title, newPriority);
                updateDom(projectName);
            }
            else if (key == 'dueDate') {
                // todo
                const newDuedate = document.getElementById('newDuedate').value;

                updateDuedate(projectName, title, newDuedate);
                updateDom(projectName)
            }
        })
    })
}



function showEditProjectNameDialog() {
    const dialog = document.getElementById('projectNameEditDialog');
    const btn = document.getElementById('projectNameUpdateBtn');
    const form = document.getElementById('editProjectNameForm');

    btn.addEventListener('click', () => {
        dialog.showModal();

        form.addEventListener('submit', () => {
            const newTitle = document.getElementById('newProjectName').value;
            updateProjectName(btn.dataset.projectname, newTitle);

            updateDom(newTitle);
            console.log(newTitle)
        })
    })
}

function showNotesDialog() {
    const notesBtns = document.querySelectorAll('button.notesBtn');
    const dialog = document.getElementById('notesDialog');
    let added;


    notesBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const todo = getTodo(btn.dataset.projectname, btn.dataset.title)
            const heading = document.getElementById('notesHeading');
            const body = document.getElementById('notesBody');
            const editBtn = document.getElementById('editNoteBtn');
            editBtn.addEventListener('click', () => {
                const editDialog = document.getElementById('editNoteDialog');
                editDialog.showModal();
                editDialog.setAttribute('data-projectname', btn.dataset.projectname);
                editDialog.setAttribute('data-title', btn.dataset.title);

                const editForm = document.getElementById('editNoteForm');
                editForm.addEventListener('submit', () => {
                    const note = document.getElementById('editNoteInput').value;

                    updateNotes(btn.dataset.projectname, note, btn.dataset.title);

                    dialog.close()

                })



            })
            heading.textContent = `${btn.dataset.title}: Notes`;
            body.textContent = todo.notes;

            dialog.showModal();
        })
    })
}


function showChecklistDialog() {
    const btns = document.querySelectorAll('button.checklistBtn');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectName = btn.dataset.projectname;
            const title = btn.dataset.title;

            const dialog = document.getElementById('checklistDialog');
            const heading = document.getElementById('checklistHeading');
            heading.textContent = `Checklist: ${title}`;
            const addBtn = document.getElementById('addChecklistBtn');
            addBtn.addEventListener('click', () => {
                const addDialog = document.getElementById('newChecklistDialog');
                addDialog.showModal();

                // submit the form
                const form = document.getElementById('newChecklistForm');
                
                form.addEventListener('submit', () => {
                    const newTitle = document.getElementById('newChecklistTitle').value;
                    const newChecklistObj = {'item': newTitle, 'completed': false}

                    updateChecklist(projectName, title, 'add', newChecklistObj);

                    updateDom(projectName);

                })
            })

            // show allreadyAddedChecklist
            const todo = getTodo(projectName, title);
            const body = document.getElementById('checklistBody');
            const container = document.createElement('div');
            container.setAttribute('id', 'checklistContainer');

            for (let i = 0; i < todo.checklist.length; i++) {
                const item = todo.checklist[i];
                const div = createChecklist(todo.checklist[i], projectName, title);

                container.appendChild(div);
            }
            
            body.appendChild(container);
            dialog.appendChild(heading);
            dialog.appendChild(body);

            dialog.showModal();


        })
    })

    // createNew
    function createChecklist(item, projectName, title) {
        const taskDiv = document.createElement('div');
        const taskCheckBox = document.createElement('input');
        taskCheckBox.setAttribute('type', 'checkbox');
        taskCheckBox.onchange = updateCompletion;

        if (item['completed'] == true) {
            taskCheckBox.checked = true;
        }
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = item.item;
        
        taskDiv.appendChild(taskCheckBox);
        taskDiv.appendChild(taskSpan);
    
        return taskDiv
    
        function updateCompletion() {
            // todo
            // projectname, title, method, item, oldItem;
            const method = 'update';
            const oldItem = item;
            const newItem = {'item': item['item'], 'completed': !item['completed']};
        
            updateChecklist(projectName, title, method, newItem, oldItem);
            // updateDom(projectName);
        
        }

    }
}

