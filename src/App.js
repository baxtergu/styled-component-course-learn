import React, { Component } from 'react';
import './App.css';

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
        {contacts.map(this.renderContact)}
      </div>
    );
  }

  renderContact(contact) {
    return (
      <div className={`contact contact--${contact.gender}`}>
        <h2 className="contact__name">{contact.name}</h2>
        <p className="contact__intro">
          {contact.name} is a <strong>{contact.age} years</strong> old
          <strong> {contact.introduction}</strong>
        </p>
      </div>
    );
  }
}

export default App;
