import getProject from "../../../localStorage/getProject";

export default function changeProjectNameDialog(projectName) {
     // todo
     const dialog = document.createElement('dialog');
     dialog.setAttribute('id', 'projectNameEditDialog')
 
     const form = document.createElement('form');
     form.setAttribute('id', 'editProjectNameForm');
     form.setAttribute('method', 'dialog');
 
 
     const fieldset = document.createElement('fieldset')
 
     const label = document.createElement('label');
     label.textContent = 'Enter New Name:'
 
     const inputTitle = document.createElement('input');
     inputTitle.setAttribute('id', 'newProjectName');
     inputTitle.required = true;
 
 
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
 
 
     fieldset.appendChild(label);
     fieldset.appendChild(inputTitle);
 
     form.appendChild(fieldset);
     form.appendChild(submitBtn);
     form.appendChild(cancelBtn);
 
     dialog.appendChild(form);
 
     return dialog
}