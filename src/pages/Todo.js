import React from "react";
import TodoStore from '../Store/TodoStore'
/*import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";*/

export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    componentWillMount(){
        TodoStore.on("change" , () =>{
            this.setState({
                    todos : TodoStore.getAll()
                })
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
     {/*   <h1>{this.state.todos}</h1>*/}
            <h1> {renObjData}</h1>
        </div>
    )}
}

