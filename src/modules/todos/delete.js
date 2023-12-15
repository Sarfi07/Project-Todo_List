import getProject from "../localStorage/getProject";
import updateProject from '../localStorage/updateProject'

export default function deleteTodo(projectName, title) {
    const project = getProject(projectName);
    let x;
    for (let i = 0; i < project.todos.length; i++) {
        if (project.todos[i].title == title) {
            project.todos.splice(i, 1);
        }
    }
    updateProject(project, projectName)
}