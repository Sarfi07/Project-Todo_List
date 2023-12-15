function addNewTodo(projectName, todo) {
    const projects = JSON.parse(localStorage.getItem('Projects'));
    
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == projectName) {
            projects[i].todos.push(todo);
        }
    }
    localStorage.setItem('Projects', JSON.stringify(projects))
}


function addNewProject(project) {
    const projects = JSON.parse(localStorage.getItem('Projects'));

    projects.push(project);

    localStorage.setItem('Projects', JSON.stringify(projects))
}


export { addNewTodo, addNewProject }