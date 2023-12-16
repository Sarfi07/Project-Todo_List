import getTodo from "../../../localStorage/getTodo";
import { updateChecklist } from "../../../todos/update";

function newChecklistDialog() {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'newChecklistDialog')

    const form = document.createElement('form');
    form.setAttribute('id', 'newChecklistForm')

    const fieldset = document.createElement('fieldset');

    const legend = document.createElement('legend');
    legend.textContent = "Create Checklist Item";
    
    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', 'checklistTitleInput');
    inputLabel.textContent = 'Title';

    const input = document.createElement('input');
    input.setAttribute('id', 'newChecklistTitle');
    input.required = true;

    fieldset.appendChild(inputLabel)
    fieldset.appendChild(input);
    fieldset.appendChild(legend)

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Submit';


    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('formmethod', 'dialog');
    cancelBtn.classList.add('btn');
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.textContent = 'Cancel';

    cancelBtn.addEventListener('click', () => {
        dialog.close()
    })

    form.appendChild(fieldset)
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);


    dialog.appendChild(form);

    return dialog;

}

// function showChecklistDialog() {
//     const checklistBtn = document.querySelectorAll('button.checklistBtn');
//     const dialog = document.getElementById('checklistDialog');
    
//     checklistBtn.forEach(btn => {
//         btn.addEventListener('click', () => {
//             console.log('clicked')

//             dialog.setAttribute('data-projectname', btn.dataset.projectname);
//             dialog.setAttribute('data-title', btn.dataset.title);

//             const todo = getTodo(btn.dataset.projectname, btn.dataset.title);
//             const heading = document.getElementById('checklistHeading');
//             const body = document.getElementById('checklistBody');
//             const container = document.createElement('div');
//             container.setAttribute('id', 'checklistContainer');

//             const projectName = btn.dataset.projectname;
//             const title = btn.dataset.title;
            
//             // new checklist logic
//             if (todo.checklist.length == 0) {
//                 // create checklist
//                 const newDialog = document.getElementById('newChecklistDialog');
//                 newDialog.showModal();

//                 const form = document.getElementById('newChecklistForm');

//                 form.addEventListener('submit', () => {
//                     const title = document.getElementById('newChecklistTitle').value;

//                     updateChecklist(projectName, title, 'add', {'item': title, 'completed': false}, todo);
//                     console.log('reached')
//                 });
            

//             } 
//             else {
//                 for (let i = 0; i < todo.checklist.length; i++) {
//                     const item = todo.checklist[i];
//                     const div = createChecklist(todo.checklist[i], projectName, title);
    
//                     container.appendChild(div)
//                 }
//             }

//             body.appendChild(container);
//             dialog.appendChild(heading);
//             dialog.appendChild(body);
//             console.log(dialog)
//             dialog.showModal();


//         })
//     })
    
// }

// function createChecklist(item, projectName, title) {
//     const taskDiv = document.createElement('div');
//     const taskBtn = document.createElement('input');
//     taskBtn.setAttribute('type', 'checkbox');
//     taskBtn.onchange = updateCompletion;
//     if (item['completed'] == true) {
//         taskBtn.checked = true;
//     }
    
//     const taskSpan = document.createElement('span');
//     taskSpan.textContent = item.item;
    
//     taskDiv.appendChild(taskBtn);
//     taskDiv.appendChild(taskSpan);

//     return taskDiv

//     function updateCompletion() {
//         // todo
//         // projectname, title, method, item, oldItem;
//         const method = 'update';
//         const oldItem = item;
//         const newItem = {'item': item['item'], 'completed': !item['completed']};
    
//         updateChecklist(projectName, title, method, newItem, oldItem);
//         // updateDom(projectName);
    
//     }
// }

export { newChecklistDialog }

    
