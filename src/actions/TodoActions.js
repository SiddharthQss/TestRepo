import Dispatcher from '../Store/Dispatcher'

export function createTodo(text){
    Dispatcher.dispatch({
        type : "CREATE_TODO",
        text,
    });
}

export  function deleteTodo(id){
    Dispatcher.dispatch({
        type : "DELETE_TODO",
        id,
    });
}

export function reloadTodos() {
    Dispatcher.dispatch({type: "FETCH_DATA"});
    setTimeout(() => {
        Dispatcher.dispatch(
            {
                type : "RECEIVE_TODO",
                todos : [
                 {id : 12,
                     name : "First changed"
                 },
                 {id : 15,
                     name : "Second changed"
                 },
                 {id : 16,
                     name : "Third changed"
                 }
             ]
            }
        );
    },1000)
}