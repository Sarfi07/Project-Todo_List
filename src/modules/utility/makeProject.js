import createTodo from "./createTodo";

export default function makeProject(name) {
    if (name) {
        return {

            name,
            todos: [],
    
            addTodo: function(todo) {
                this.todos.push(todo);
            }
       }
        
    } 
    else {

        // populate with some already added todos

        const newTodo = createTodo('Wake Up', 'Wake up Early in the morning tomorrow', 8, new Date(2023, 11, 13), "example note", [{'checklist': false}]);
        return [{
            name: "Default Project",
            todos: [newTodo],

            addTodo: function(todo) {
                this.todos.push(todo);
            }
        }]
    }
}