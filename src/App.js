import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/About';
import axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    console.log(window.innerWidth);
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
    })
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))

  }

  addTodo = (title) => {
    if (title !== '') {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
        .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    }else{
      alert('Please fill the input with a task to do')
    }
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <Navbar />
          <div className="container">
            <Route exact path="/" render={() => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <ul className="list-group">
                  <Todos todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo} />
                </ul>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;