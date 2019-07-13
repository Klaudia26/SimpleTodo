import React from 'react';

const TodoList = (props) => {
    return (
        <div>
            <h1>Todo List!</h1>
            <ul>
                {props.todos.map(todo => {
                    const color = todo.complete ? "green" : "white";
                    return (
                        <li style={{ background: `${color}` }} key={todo.id}>{todo.content} <button onClick={(e) => props.changeStatus(todo.id)}>Complete</button></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;
