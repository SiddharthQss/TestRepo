import {EventEmitter} from "events";


 class TodoStore extends EventEmitter{
    constructor(){
        super()
        this.todos = [
            {id : 1234,
                name : "First"
            },
            {id : 1235,
                name : "Second"
            },
            {id : 1236,
                name : "Third"
            }
        ]
    }



    createTodo(text){
        const ids = new Date();
        this.todos.push({
            id : ids,
            name : text
        })
        this.emit("change");
    }

    getAll(){
        return this.todos;
    }

}

const todoStore = new TodoStore();
window.todoStore = todoStore;
export default todoStore