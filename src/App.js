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
    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodo} />
                <TodoList />
            </div>
        )
    }
}

export default App;
