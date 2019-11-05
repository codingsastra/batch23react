import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Counter from './Counter'
import Like from './Like'
import Friends from './Friends';
import Greeting from './Greeting'
import Todos from './Todos'
import Users from './Users'
import Library from './Library/Library'

class  App extends React.Component {
  render(){
    var newYear=2020;
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Ram" password="123456" year={2020}/>
        </header>
        <Library/>
      </div>
    );
  }
}

export default App;
