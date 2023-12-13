import makeProject from "./makeProject";
import { addNewProject } from "./updateLocalStorage";
import '../../styles/sidebar.css';

export default function createSidebar(projects) {
    const sidebar = document.createElement('div');
    sidebar.setAttribute('id', 'sidebar');


    const heading = document.createElement('h2');
    heading.textContent = 'Projects';

    const createBtn = document.createElement('button');
    createBtn.textContent = "Create Project";
    createBtn.setAttribute('id', 'createProjectBtn');

    createBtn.addEventListener('click', () => {
        const dialog = document.getElementById('addNewProject');
        dialog.showModal();
    })

    sidebar.appendChild(heading);
    sidebar.appendChild(createBtn);
    sidebar.appendChild(createProjectList(projects));

    return sidebar
    
}

function createProjectList(projects) {
    const ulElement = document.createElement('ul');
    ulElement.setAttribute('id', 'projectsUl');

    for (let i = 0; i < projects.length; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = projects[i].name;

        ulElement.appendChild(liElement);
    }

    return ulElement
}
