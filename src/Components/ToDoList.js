import React from 'react';
import {ToDoItems} from './ToDoItems';

export const ToDoList = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container my-3 " style={myStyle}>
            <h3>ToDo List</h3>
            {props.todos.length===0? "No ToDos to Display" :
            props.todos.map((todo) => {
                return <ToDoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })
            }          
            
        </div>
    )
}
