import {EventEmitter} from "events";

import Dispatcher from '../Store/Dispatcher'
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

    handleActions(actions){
        debugger;
        switch (actions.type) {
            case "CREATE_TODO" : {
                this.createTodo(actions.text);
            }
            case "RECEIVE_TODO" : {
                this.todos = actions.todos;
                this.emit("change");
            }
        }
    }
}

const todoStore = new TodoStore();
Dispatcher.register(todoStore.handleActions.bind(todoStore));
window.Dispatcher = Dispatcher;
window.todoStore = todoStore;
export default todoStore