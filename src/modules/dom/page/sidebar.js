import projectDialog from "../utility/dialogs/newProjectDialog";
import showDialogs from "../utility/dialogs/showDialogs";
import submitDialog from "../utility/dialogs/submitDialog";
import './../styles/sidebar.css';
import { createHomeBody, changeHomeBody } from "./homeBody";

export default function createSidebar() {
    const projects = JSON.parse(localStorage.getItem('Projects'));

    const sidebar = document.createElement('div');
    sidebar.setAttribute('id', 'sidebar');

    const heading = document.createElement('h2');
    heading.textContent = 'Projects';

    const createBtn = document.createElement('button');
    createBtn.textContent = "Create Project";
    createBtn.setAttribute('id', 'createProjectBtn');

    sidebar.appendChild(projectDialog())
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
        liElement.addEventListener('click', () => {
            changeHomeBody(projects[i]);
            showDialogs();
            submitDialog();
        })

        ulElement.appendChild(liElement);
    }

    return ulElement
}