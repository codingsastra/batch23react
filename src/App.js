import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Counter from './Counter'

class  App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Ram" year={2020}/>
          <Welcome name="Varma"/>
        </header>
        <Counter/>
      </div>
    );
  }
}

export default App;
