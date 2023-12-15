import getProject from "../../localStorage/getProject";
import showDialogs from "../utility/dialogs/showDialogs";
import submitDialog from "../utility/dialogs/submitDialog";
import createBody from "./body";

export default function updateDom(currentProjectTitle) {
    // location.reload();
    if (currentProjectTitle) {
        const content = document.getElementById('content');
        const oldBody = document.getElementById('container');
        const projects = JSON.parse(localStorage.getItem('Projects'));
        const currentProject = getProject(currentProjectTitle);
        const newBody = createBody(projects, currentProject);
        
        if (oldBody) {
            content.removeChild(oldBody);
        }
        content.appendChild(newBody)
    
        showDialogs();
        submitDialog();
    }
    else {
        return;
    }
}