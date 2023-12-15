export default function notesDialog() {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'notesDialog');

    const heading = document.createElement('h3');
    heading.setAttribute('id', 'notesHeading');

    const notesBody = document.createElement('div');
    notesBody.setAttribute('id', 'notesBody');

    const btnsDiv = document.createElement('div');
    btnsDiv.setAttribute('id', 'btnsDiv');


    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit Note";
    editBtn.setAttribute('id', 'editNoteBtn');

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    
    dialog.appendChild(heading);
    dialog.appendChild(notesBody);
    dialog.appendChild(closeBtn);
    dialog.appendChild(editBtn);
    // notesBody.appendChild(btnsDiv);

    closeBtn.addEventListener('click', () => {
        dialog.close();
    })

    return dialog
}