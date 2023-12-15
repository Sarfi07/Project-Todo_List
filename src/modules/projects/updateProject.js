import getProject from "../localStorage/getProject";

export default function updateProjectName(oldName, newName) {
    const projects = JSON.parse(localStorage.getItem('Projects'));

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == oldName) {
            projects[i].name = newName
        }
    }

    localStorage.setItem('Projects', JSON.stringify(projects))
}