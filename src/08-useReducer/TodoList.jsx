import React from 'react'
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({todos = []}) => {
    console.log(todos)
    // #{va a esperar un arreglo}
  return (
    <ol className="list-group">
    {
        todos.map( todo => (
            <TodoItem key={todo.id} todo = {todo} />
        ))
    }
    </ol>
  )
}

TodoList.propTypes = {
    text: PropTypes.array,
  };
