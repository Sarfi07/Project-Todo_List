export default function getTodo(projectName, title) {
    const projects = JSON.parse(localStorage.getItem('Projects'));

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == projectName) {
            for (let j = 0; j < projects[i].todos.length; j++) {
                if (projects[i].todos[j].title == title) {
                    return projects[i].todos[j]
                }
            }
        }
    }
}