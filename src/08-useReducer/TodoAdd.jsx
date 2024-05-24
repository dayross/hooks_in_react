import React from 'react'
import {useForm} from '../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onResetForm} = useForm({
        description : '',
    });

    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(description.length < 1) return;

        const formattedInput = {
            id : new Date().getTime(),
            done: false,
            description : description
        }
        onNewTodo(formattedInput);
        onResetForm();

        }
    


  return (
    <>
    <form onSubmit={onFormSubmit}>
        <input
        type="text"
        placeholder="¿Cuál es su deber?"
        className="form-control"
        name = "description"
        value = {description}
        onChange={onInputChange}
        />
        <br></br>
        <button
        type="submit"
        className="btn btn-outline-primary">Guardar</button>
    </form>
    </>
  );
}

