import React, { Component } from 'react';
import MouseOver from './MouseOver';
import './DontTouchMe.css';
class App extends Component {
  render() {
    return (
      <div>

        <header className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="/">Home Page</a>
            </p>
          </div>
        </header>

          <MouseOver />
      </div>
    );
  }
}

export default App;
