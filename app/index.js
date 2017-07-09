import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// var React = require('react');
// var ReactDOM = require('react-dom');
// require('./index.css');
class App extends React.Component {
  render() {
    return (
      <div>
        Hello world!
      </div>
    );
  }
}

// export default App;
const $app = document.getElementById('app');

ReactDOM.render(<App/>, $app);
