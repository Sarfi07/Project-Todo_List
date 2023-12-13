import './../../styles/home.css';
import createSidebar from './sidebar';
import createHomeBody from './body';
import { createDialog } from './dialog';
import { submitDialog } from './dialog';

let currentProject;

export default function createHomePage(projects) {
    // take content div from htmlPage
    const content = document.getElementById('content');

    currentProject = projects[0];
    
    content.appendChild(createSidebar(projects));
    content.appendChild(createHomeBody(currentProject));   
    
    const homeBody = document.getElementById('homeBody');
    
    const newDialog = createDialog(currentProject.name);
    homeBody.appendChild(newDialog);



    const addTodoBtn = document.getElementById('addTodoBtn');
    addTodoBtn.addEventListener('click', () => {
        newDialog.showModal()
    })

    const form = document.getElementById('addTodoForm');
    form.addEventListener('submit', () => {
        submitDialog(currentProject.name)
    })
}
