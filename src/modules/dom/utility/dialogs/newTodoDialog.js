export default function createTodoDialog(projectTitle) {
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
    hiddenTitle.value = projectTitle;
    hiddenTitle.setAttribute('id', 'projectTitle')

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