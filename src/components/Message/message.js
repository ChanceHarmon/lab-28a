import React from 'react';
import Button from '../Button/button';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      name: this.props.name,
      number: 7,
    };
  }

  render() {
    return (
      <>
        <div>{this.state.text}</div>
        <p>{this.state.name}</p>
        <Button name={this.state.name} number={this.state.number} />
      </>
    );
  }
}

export default Message;