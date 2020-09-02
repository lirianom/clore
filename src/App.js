import React from 'react';
import HomePage from './components/home'
import './css/style.css'

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}