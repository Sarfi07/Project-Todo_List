import { addNewProject } from '../localStorage/updateLocalStorage';
import createTodo from './../todos/create'

function createProject(name) {
    let project;
    if (name) {
        project = {
            name,
            todos: [],
    
            addTodo: function(todo) {
                this.todos.push(todo);
            }
       };
       addNewProject(project)      
    } 
    else {
        // populate with some already added todos

        const newTodo = createTodo('Wake Up', 'Wake up Early in the morning tomorrow', 8, new Date(2023, 11, 13), "example note", [{'item': 'a checklist Item', 'completed': false}]);
        project = [{
            name: "Default Project",
            todos: [newTodo],
            addTodo: function(todo) {
                this.todos.push(todo);
            }
        }]

        localStorage.setItem('Projects', JSON.stringify(project))
    }



}


export { createProject }