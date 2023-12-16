import getProject from "../../../localStorage/getProject";
import { addNewProject, addNewTodo } from "../../../localStorage/updateLocalStorage";
import { createProject } from "../../../projects/createProject";
import createTodo from "../../../todos/create";
import createBody from "../../page/body";
import updateDom from "../../page/updateDom";
import updateSidebar from "../../page/updateSidebar";

export default function submitDialog() {
    const todoForm = document.getElementById('addTodoForm');

    todoForm.addEventListener('submit', (e) => {

        const title = document.getElementById('title').value;
        const desc = document.getElementById('description').value;
        const priority = document.getElementById('priority').value;
        const dueDate = document.getElementById('dueDate').value;
        const projectTitle = document.getElementById('projectTitle').value;

        
        const newTodo = createTodo(title, desc, priority, new Date(dueDate), '', []);
        if (!title) {
            return 0;
        }
        else {
            addNewTodo(projectTitle, newTodo);
        }
        
        updateDom(projectTitle)

    })



    const projectForm = document.getElementById('addProjectForm');

    const cancelBtn = document.querySelector(`#addProjectForm > button.cancelBtn`);
    cancelBtn.addEventListener('click', () => {
        return;
    })
    projectForm.addEventListener('submit', () => {
        const projectTitle = document.getElementById('newProjectTitle').value;

        createProject(projectTitle);
        updateDom(projectTitle)
    })
}