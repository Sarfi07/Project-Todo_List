import { createProject } from "../../projects/createProject";
import showDialogs from "../utility/dialogs/showDialogs";
import submitDialog from "../utility/dialogs/submitDialog";
import createBody from "./body";

export default function initialLoad() {
    // create a new project by default if project is not avalaible already

    let projects = JSON.parse(localStorage.getItem('Projects'));

    if (!projects) {
        const newProject = createProject();
        projects = JSON.parse(localStorage.getItem('Projects'));
    }
    

    const content = document.getElementById('content');
    const newBody = createBody(projects, projects[0]);
    
    content.appendChild(newBody)

    const li = document.querySelector('li');
    li.classList.add('active');
    
    showDialogs();
    submitDialog();

    // append title dialog

    // content.appendChild(editTitleDialog());

}