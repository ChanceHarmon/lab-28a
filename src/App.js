
import React from 'react';
import Message from './components/Message/message';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello from Code Fellows',
      name: 'Chance',
    };
    if (!this.state.text || !this.state.name) {
      throw new Error('Invalid Props!');
    }
  }

  render() {
    return (
      <>
        <Message text={this.state.text} name={this.state.name} />

      </>
    );
  }
}

export default App;