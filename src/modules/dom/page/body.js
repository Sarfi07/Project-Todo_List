import { createHomeBody } from "./homeBody";
import createSidebar from "./sidebar";
import './../styles/home.css';

export default function createBody(project, currentProject) {
    const homeBody = createHomeBody(currentProject);
    const sidebar = createSidebar(project);

    const container = document.createElement('div');
    container.setAttribute('id','container');

    container.appendChild(sidebar);
    container.appendChild(homeBody);

    return container;
}
