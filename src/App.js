import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
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
        {contacts.map(this.renderContact)}
      </div>
    );
  }

  renderContact(contact) {
    const ContactComponent = contact.gender === 'female' ? ContactFemale : ContactMale;
    return (
      <ContactComponent>
        <ContactName>{contact.name}</ContactName>
        <ContactIntro>
          {contact.name} is a <strong>{contact.age} years</strong> old
          <strong> {contact.introduction}</strong>
        </ContactIntro>
      </ContactComponent>
    );
  }
}

const Contact = styled.div`
  border: 1px solid #DEDEDE;
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  color: white;
`;

const ContactMale = Contact.extend`
  background-color: green;
`

const ContactFemale = Contact.extend`
  background-color: tomato;
`

const ContactName = styled.h2`
  font-size: 20px;
  margin-top: 0;
`;

const ContactIntro = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  strong:{
    font-weight: 600;
  }
`

export default App;
