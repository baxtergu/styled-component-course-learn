import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Contact from './components/Contact';
import Button from './components/Button';
// import './App.css';

const contacts = [
  { name: 'Lucy', gender: 'male', age: 30, introduction: 'Developer' },
  { name: 'Lily', gender: 'female', age: 28, introduction: 'Painter' },
  { name: 'Lilei', gender: 'male', age: 35, introduction: 'English Teacher' },
  { name: 'John', gender: 'female', age: 24, introduction: 'Web Designer' }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {contacts.map(contact => <Contact contact={contact} />)}
        <Button>Click Me</Button>
      </div>
    );
  }
}

export default App;
