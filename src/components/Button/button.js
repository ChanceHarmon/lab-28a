import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      number: this.props.number,
    };
  }

  render() {
    return <button>{this.state.name} | {this.state.number}</button>;
  }
}

export default Button;