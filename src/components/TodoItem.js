import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    Checked = () => {
        return this.props.todo.completed;
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <li className="list-group-item todos-list" style={this.getStyle()}>
                <input type="checkbox"
                    onChange={this.props.markComplete.bind(this, id)}
                    className="mr-3" />
                {title}
                <button onClick={this.props.deleteTodo.bind(this, id)}
                    className="btn btn-danger float-right">X</button>
            </li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoItem;