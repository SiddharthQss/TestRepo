import React from "react";
import TodoStore from '../Store/TodoStore'

import * as TodoActions from "../actions/TodoActions";

export default class Todos extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    componentWillMount(){
        debugger;
        TodoStore.on("change" , this.getTodos)
        console.log("count" , TodoStore.listenerCount("change"))

    }

    componentWillUnmount(){
        TodoStore.removeListener("change" , this.getTodos);
    }

    createTodo(){
        TodoActions.createTodo(Date.now())
    }

    reloadTodo(){
        TodoActions.reloadTodos()
    }

    getTodos(){

            this.setState({
                todos : TodoStore.getAll()
            })

    }

    render(){
        const {todos} =  this.state
        const renObjData = todos.map(function(data) {
            return ([
                <p key={data.id}>{data.name}</p>,
            ]);
        });
    return(
        <div>
            {/*<button onClick={this.createTodo.bind(this)}>Create Todo</button>*/}
            <button onClick={this.reloadTodo.bind(this)}>Reload Todo</button>
            <h1> {renObjData}</h1>
        </div>
    )}
}

