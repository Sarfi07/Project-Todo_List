function titleEditDialog() {
    // todo
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'titleEditDialog')

    const form = document.createElement('form');
    form.setAttribute('id', 'editTitleForm');
    form.setAttribute('method', 'dialog');


    const fieldset = document.createElement('fieldset')

    const label = document.createElement('label');
    label.textContent = 'Enter New Title:'

    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('id', 'newTitle')


    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Submit';


    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('formmethod', 'dialog');
    cancelBtn.classList.add('btn');
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.textContent = 'Cancel';


    fieldset.appendChild(label);
    fieldset.appendChild(inputTitle);

    form.appendChild(fieldset);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);

    dialog.appendChild(form);

    return dialog


}

function descriptionEditDialog() {
    // todo
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'descriptionEditDialog')

    const form = document.createElement('form');
    form.setAttribute('id', 'editDescriptionForm');
    form.setAttribute('method', 'dialog');


    const fieldset = document.createElement('fieldset')

    const label = document.createElement('label');
    label.textContent = 'Enter New description:'

    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('id', 'newDescription')


    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Submit';


    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('formmethod', 'dialog');
    cancelBtn.classList.add('btn');
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.textContent = 'Cancel';


    fieldset.appendChild(label);
    fieldset.appendChild(inputTitle);

    form.appendChild(fieldset);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);

    dialog.appendChild(form);

    return dialog

}

function priorityEditDialog() {
    // todo
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'priorityEditDialog')

    const form = document.createElement('form');
    form.setAttribute('id', 'editPriorityForm');
    form.setAttribute('method', 'dialog');


    const fieldset = document.createElement('fieldset')

    const label = document.createElement('label');
    label.textContent = 'Enter New priority:'

    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('id', 'newPriority')


    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Submit';


    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('formmethod', 'dialog');
    cancelBtn.classList.add('btn');
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.textContent = 'Cancel';


    fieldset.appendChild(label);
    fieldset.appendChild(inputTitle);

    form.appendChild(fieldset);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);

    dialog.appendChild(form);

    return dialog

}

function dueDateEditDialog() {
    // todo
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'dueDateEditDialog')

    const form = document.createElement('form');
    form.setAttribute('id', 'editDuedateForm');
    form.setAttribute('method', 'dialog');


    const fieldset = document.createElement('fieldset')

    const label = document.createElement('label');
    label.textContent = 'Enter New Date:'

    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('id', 'newDuedate')


    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Submit';


    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('formmethod', 'dialog');
    cancelBtn.classList.add('btn');
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.textContent = 'Cancel';


    fieldset.appendChild(label);
    fieldset.appendChild(inputTitle);

    form.appendChild(fieldset);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);

    dialog.appendChild(form);

    return dialog

}


export { titleEditDialog, descriptionEditDialog, priorityEditDialog, dueDateEditDialog }