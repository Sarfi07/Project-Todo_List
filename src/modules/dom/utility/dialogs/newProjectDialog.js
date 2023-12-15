export default function projectDialog() {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'addProjectDialog');

    const form = document.createElement('form');
    form.setAttribute('id', 'addProjectForm');
    form.setAttribute('method', 'dialog');


    const fieldset = document.createElement('fieldset');

    const legend = document.createElement('legend');
    legend.textContent = "Add New Project";

    const div = document.createElement('div');
    div.classList.add(`inputProjectTitle`);

    const label = document.createElement('label');
    label.textContent = 'Project Title';
    label.setAttribute('for', 'newProjectTitle');

    const input = document.createElement('input');
    input.setAttribute('id', 'newProjectTitle');
    input.setAttribute('type', 'text');

    div.appendChild(label);
    div.appendChild(input);
    
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Submit';

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('formmethod', 'dialog');
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.textContent = 'Cancel'

    cancelBtn.addEventListener('click', () => {
        dialog.close()
    })


    fieldset.appendChild(legend);
    fieldset.appendChild(div);

    form.appendChild(fieldset);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);

    dialog.appendChild(form);




    return dialog;  
}