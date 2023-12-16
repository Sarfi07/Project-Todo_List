function editTodoDialog(title, projectName) {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'editTodoDialog')

    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    form.setAttribute('id', 'editTodoForm')


    // fieldset
    const fieldset = document.createElement('fieldset');


    // dropdown
    const label = document.createElement('label')
    label.textContent = 'Choose what to edit';

    const select = document.createElement('select');
    select.setAttribute('id', 'reviseKey');
    select.setAttribute('name', 'reviseKey');
    select.required = true;

    const disabledOption = document.createElement('option');
    disabledOption.selected = true;
    disabledOption.disabled = true;
    disabledOption.textContent = 'Choose an options'
    select.appendChild(disabledOption)

    
    const options = ['title', 'description', 'priority', 'dueDate']


    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');
        option.value = options[i];
        option.textContent = options[i];

        select.appendChild(option);
    }

    // submitBtn & cancelBtn

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Submit';

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('formmethod', 'dialog');
    cancelBtn.classList.add('btn');
    cancelBtn.textContent = 'Cancel';

    cancelBtn.addEventListener('click', () => {
        dialog.close()
    })


    fieldset.appendChild(label);
    fieldset.appendChild(select);

    form.appendChild(fieldset);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);


    dialog.appendChild(form);

    // select.addEventListener('change', () => {
    //     let selectedValue = select.value;
    //     const sectionDailog = document.getElementById(`${selectedValue}EditDialog`);
    //     sectionDailog.setAttribute('data-title', title);
    //     sectionDailog.setAttribute('data-projectName', projectName);

    //     sectionDailog.showModal();
    // })


    return dialog
}

function closeDialog() {
    const todoDialog = document.getElementById('editTodoDialog');

    todoDialog.close();
}


export { editTodoDialog }