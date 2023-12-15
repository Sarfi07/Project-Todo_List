export default function editNoteDialog() {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'editNoteDialog');

    const form = document.createElement('form');
    form.setAttribute('id', 'editNoteForm');
    form.setAttribute('method', 'dialog')

    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = "Edit Note";

    const label = document.createElement('label');
    label.setAttribute('for', 'editNoteInput');

    const input = document.createElement('input');
    input.setAttribute('id', 'editNoteInput');

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.setAttribute('type', 'submit');
    submitBtn.classList.add('btn');

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancelBtn')

    fieldset.appendChild(legend);
    fieldset.appendChild(label)
    fieldset.appendChild(input)

    form.appendChild(fieldset);
    form.appendChild(submitBtn)
    form.appendChild(cancelBtn);

    dialog.appendChild(form);
    return dialog;
}






