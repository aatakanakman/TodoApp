import React ,{useState} from 'react'
import {GrFormClose , GrFormEdit , GrFormCheckmark} from 'react-icons/gr';
import { UseTodoLayerValue } from '../context/TodoContext'
import clsx from 'clsx';

const Todo = ({todo}) => {

    const [{},dispatch] = UseTodoLayerValue();
    const [editable , setEditable ] = useState(false);
    const [content , setContent ] = useState(todo.content);


    const removeTodo = todoId => {

        dispatch({
            type : "REMOVE_TODO",
            payload : todoId
        })

    }

    const complateTodo = todoId => {

        dispatch({
            type : "COMPLATE_TODO",
            payload : todoId
        })

    }

    const updateTodo = ({todoId,newValue}) => {

        dispatch({
            type : "UPDATE_TODO",
            payload : {todoId,newValue}
        })

    }

    

    const todoStyle = clsx({
        ["todo-row"] : true,
        ["completed"] : todo.isComplated,
    })

    return (
        <div className = {todoStyle}>
            <div onClick = {()=> editable ? '' : complateTodo(todo.id)}>
                {
                    editable ? 
                    <input className = "todo-input-edit" type = "text" value = {content} onChange= {event => setContent(event.target.value)}></input>
                     : todo.content
                } 
            </div>
            <div className = "todo-icons">
                <GrFormClose className = "todo-icon" onClick = {() => removeTodo(todo.id)}></GrFormClose>
                {
                    editable ? <GrFormCheckmark className = "todo-icon" onClick = {()=>{
                        updateTodo({
                            todoId : todo.id,
                            newValue : content
                        })
                        setContent("")
                        setEditable(false)
                    }} ></GrFormCheckmark>
                    :
                    <GrFormEdit className = "todo-icon" onClick = {()=>setEditable(true)} ></GrFormEdit>
                }
                
            </div>
        </div>
    )
}

export default Todo
