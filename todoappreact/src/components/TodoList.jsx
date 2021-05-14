import React from 'react'
import Todo from './Todo';
const todoList = ({todos}) => {
    return (
       <div className = "todo-list">
           {
               todos && todos.map(todo => (
                   <Todo key = {todo.id} todo = {todo} ></Todo>
               ))
           }
       </div>
    )
}

export default todoList
