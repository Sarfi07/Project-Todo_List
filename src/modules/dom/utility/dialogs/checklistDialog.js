import { add } from "date-fns";
import { newChecklistDialog } from "./newChecklistDialog";

export default function checklistDialog() {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'checklistDialog');

    const heading = document.createElement('h3');
    heading.setAttribute('id', 'checklistHeading');

    const addBtn = document.createElement('button');
    addBtn.setAttribute('id', 'addChecklistBtn');
    addBtn.textContent = "Add Checklist";
    addBtn.classList.add('btn')


    const checklistBody = document.createElement('div');
    checklistBody.setAttribute('id', 'checklistBody');

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.classList.add('btn')


    // const addChecklistDialog = newChecklistDialog();

    // addBtn.addEventListener('click', () => {
    //     addChecklistDialog.showModal();
    // })

    dialog.appendChild(heading);
    dialog.appendChild(checklistBody);
    dialog.appendChild(closeBtn);
    dialog.appendChild(addBtn);
    
    closeBtn.addEventListener('click', () => {
        dialog.close();
        const container = document.getElementById('checklistContainer');

        if (container) {
            checklistBody.removeChild(container);
        }
    })

    return dialog
}





