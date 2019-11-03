import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);