import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React&Redux App</h1>
        </header>

        <div className="Todo-App">
          <div className="Todo-App">
            <Message message="Hello There" />
            <TodoForm />
            <TodoList />
          </div>
        </div>

      </div>
    );
  }
}

export default App