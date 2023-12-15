import getProject from "../localStorage/getProject";
import updateProject from "../localStorage/updateProject";

function updateTitle(projectName, oldTitle, newTitle) {
    // Todo
    const project = getProject(projectName);
    
    for (let i = 0; i < project.todos.length; i++) {
        if ( project.todos[i].title == oldTitle) {
            project.todos[i].title = newTitle;
        }
    }

    updateProject(project, projectName)
}


function updateDescription(projectName, title, newDescription) {
    // Todo

    const project = getProject(projectName);
    
    for (let i = 0; i < project.todos.length; i++) {
        if ( project.todos[i].title == title) {
            console.log(project.todos[i].description)
            project.todos[i].description = newDescription;
        }
    }

    updateProject(project, projectName)
}


function updatePriority(projectName, title, newPriority) {
    // Todo
    const project = getProject(projectName);
    
    for (let i = 0; i < project.todos.length; i++) {
        if ( project.todos[i].title == title) {
            project.todos[i].priority = newPriority;
        }
    }

    updateProject(project, projectName)
}

function updateDuedate(projectName, title, date) {
    // Todo
    const project = getProject(projectName);
    
    for (let i = 0; i < project.todos.length; i++) {
        if ( project.todos[i].title == title) {
            project.todos[i].dueDate = date;
        }
    }

    updateProject(project, projectName)
}

 
function updateNotes(projectName, newNote, title) {
    // Todo

    const project = getProject(projectName);
    
    for (let i = 0; i < project.todos.length; i++) {
        if ( project.todos[i].title == title) {
            project.todos[i].notes = newNote;
        }
    }

    updateProject(project, projectName)
}


function updateChecklist(projectName, title,  method, item, oldItem) {
    // Todo

    const project = getProject(projectName);
    
    for (let i = 0; i < project.todos.length; i++) {
        if ( project.todos[i].title == title) {

            if (method == 'add') {
                // item should be object
                project.todos[i].checklist.push(item)
            } 

            else if (method == 'remove') {
                // item should be an object
                for (let j = 0; j < project.checklist.length; j++) {
                    if (project.todos[i].checklist[j] == item) {
                        project.todos[i].checklist.splice(j, 1);
                    }
                }
            } 

            else if (method == 'update') {
                console.log('reached')
              //  item should be an object
                for (let j = 0; j < project.todos[i].checklist.length; j++) {
                    if ( project.todos[i].checklist[j]['item'] == oldItem['item']) {
                        project.todos[i].checklist[j]['completed'] = item['completed'];
                        console.log(project.todos[i].checklist[j])
                    }
                }
            }
        }
    }

    updateProject(project, projectName)
    // methods: add, update, remove
}


export { updateTitle, updateDescription, updatePriority, updateNotes, updateChecklist, updateDuedate }