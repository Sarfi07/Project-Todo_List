import makeProject from "./modules/utility/makeProject";
import createHomePage from "./modules/utility/createBody";
import { addProject } from "./modules/utility/addProject";
import createHomeBody from "./modules/utility/body";
import { createDialog } from "./modules/utility/dialog";
import { submitDialog } from "./modules/utility/dialog";


let localProject;

// load the screen according to the availibility to projects
if (localStorage.getItem('Projects')) {
    // populate screen
    localProject = JSON.parse(localStorage.getItem('Projects'));
}
else {
    const defaultProject = JSON.stringify(makeProject());

    localStorage.setItem('Projects', defaultProject);

    localProject = JSON.parse(localStorage.getItem('Projects'));
}


// populate the sidebar and body
createHomePage(localProject);
addProject();


// logic that toggle between projects on homeBody;

function xyz() {
    const ulElement = document.querySelectorAll('li');

    ulElement.forEach(element => {
        const projects = JSON.parse(localStorage.getItem('Projects'));

        element.addEventListener('click', () => {
            const title = element.textContent;
            const currentProject = updateBody(title);
            const newBody = createHomeBody(currentProject);
            const content = document.getElementById('content');
            const oldBody = document.getElementById('homeBody');

            const dialog = createDialog(currentProject.name);
            newBody.appendChild(dialog);

            content.removeChild(oldBody)
            content.appendChild(newBody)
            
            const newTodoBtn = document.getElementById('addTodoBtn')

            newTodoBtn.addEventListener('click', () => {
                const dialog = document.getElementById('addTodoDialog');
                dialog.showModal();
            })

            const form = document.getElementById('addTodoForm');
            form.addEventListener('submit', () => {
                submitDialog(currentProject.name)
            })

        })
    })
}

function updateBody(title) {
    const projects = JSON.parse(localStorage.getItem('Projects'));
    let currentProject;

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == title) {
            currentProject = projects[i];
        }
    }

    return currentProject

}

// todos
// update asthetics
// add notes and checklist
// setting todos as complete
// changing todo priority
// finetune handling dates


xyz()