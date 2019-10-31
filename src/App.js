import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Counter from './Counter'
import Like from './Like'

class  App extends React.Component {
  render(){
    var newYear=2020;
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Ram" password="123456" year={2020}/>
        </header>
        <Like/>
      </div>
    );
  }
}

export default App;
