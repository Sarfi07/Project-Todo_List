import makeProject from "./makeProject";
import { addNewProject } from "./updateLocalStorage";
import createSidebar from "./sidebar";
import createHomeBody from "./body";
import { createDialog, submitDialog, updateHomeBody } from "./dialog";

function addProject() {
    const form = document.getElementById('addNewProjectForm');

    form.addEventListener('submit', () => {
        const title = document.getElementById('projectTitle').value;


        const newProject = makeProject(title);

        addNewProject(newProject);
        addProjectToDom(title);

        console.log(newProject);
        document.getElementById('projectTitle').value = ""
    })
}

function addProjectToDom(title) {
    const ulElement = document.getElementById('projectsUl')

    const liElement = document.createElement('li');
    liElement.textContent = title;

    ulElement.appendChild(liElement);

    const projects = JSON.parse(localStorage.getItem('Projects'));
    let currentProject;

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == title) {
            currentProject = projects[i];
            console.log(currentProject.name)
        }
    }

    // show newHomeBody by default when new project is created
    updateHomeBody(title);
    
    const newTodoBtn = document.getElementById('addTodoBtn')

    newTodoBtn.addEventListener('click', () => {
        const dialog = document.getElementById('addTodoDialog');
        dialog.showModal();
    })

    const form = document.getElementById('addTodoForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        submitDialog(currentProject.name)
    })




    liElement.addEventListener('click', () => {
        const title = liElement.textContent;
        updateHomeBody(title);
        
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

}


export { addProject }