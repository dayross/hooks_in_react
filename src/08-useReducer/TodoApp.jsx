

import React, { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const initialState = [
    {
        id : new Date().getTime(),
        description : "Recolectar worms",
        done : false
    },
    {
        id : new Date().getTime()+5,
        description : "Oler flores",
        done : false
    },
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = ( todo ) => {
        const action = {
            type : '[TODO] add todo',
            payload : todo
        }

        dispatch(action)
    }
        
    
  return (
    <>
        <h1> Todo App</h1>
        <h2> Lista de deberes</h2>
        <p> Pendientes : 2</p>
        <hr/>
       <div className="row">
            <div className="col-7">
                <TodoList todos={todos}/>
            </div>

            <div className="col-5">
                <h4> Agregar deberes</h4>
                <TodoAdd onNewTodo={ handleNewTodo }/>
            </div>
        </div>

        
    </>
  )
}
