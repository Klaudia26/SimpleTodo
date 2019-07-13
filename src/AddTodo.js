import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        id: 1,
        content: "",
        complete: false,
    }
    handleOnChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleOnClick = (e) => {
        this.props.addTodo(this.state)
    }
    render() {
        return (
            <div>
                <input onChange={this.handleOnChange} value={this.state.content} type="text" placeholder="Enter new todo" />
                <button onClick={this.handleOnClick}>Add</button>
            </div>
        )
    }
}

export default AddTodo;
