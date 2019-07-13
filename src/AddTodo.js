import React, { Component } from 'react';



class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter new todo" />
                <button>Add</button>
            </div>
        )

    }
}




export default AddTodo;
