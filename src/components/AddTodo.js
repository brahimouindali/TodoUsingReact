import React, { Component } from "react";
import PropTypes from 'prop-types';

class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                    id="search-input"
                    placeholder="Add Todo..."
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    className="form-control" />
                <button id="btn"
                    className="btn btn-success">New Todo</button>
            </form>
        )

    }

}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;