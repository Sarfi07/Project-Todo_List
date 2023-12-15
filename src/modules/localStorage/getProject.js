export default function getProject(projectName) {
    const projects = JSON.parse(localStorage.getItem('Projects'));

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == projectName) {
            return projects[i]
        }
    }
}