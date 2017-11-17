import React, { Component } from 'react';
// import Contact from './components/Contact';
import PasswordInput from './components/PasswordInput';

const contacts = [
  // { name: 'Lucy', gender: 'male', age: 30, introduction: 'Developer' },
  // { name: 'Lily', gender: 'female', age: 28, introduction: 'Painter' },
  // { name: 'Lilei', gender: 'male', age: 35, introduction: 'English Teacher' },
  // { name: 'John', gender: 'female', age: 24, introduction: 'Web Designer' }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <PasswordInput name="pass1" />
        <PasswordInput name="pass2" size="2em" />
      </div>
    );
  }
}

export default App;
