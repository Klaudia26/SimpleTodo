import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from "./TodoList";

class App extends Component {
    state = {
        todos: [],
    }
    addTodo = (todo) => {
        this.setState({
            todos: [
                todo,
                ...this.state.todos
            ]
        });
    }
    changeStatus = (id) => {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
                return todo;
            } else {
                return todo;
            }
        });
        this.setState({
            todos,
        });
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <AddTodo addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} changeStatus={this.changeStatus} />
            </div>
        )
    }
}

export default App;
