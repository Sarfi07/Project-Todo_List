export default function deleteProject(projectName) {
    const projects = JSON.parse(localStorage.getItem('Projects'));

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == projectName) {
            projects.splice(i, 1);
        }
    }

    localStorage.setItem('Projects', JSON.stringify(projects));
}