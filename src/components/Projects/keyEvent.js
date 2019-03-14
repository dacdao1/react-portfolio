import React from 'react';


export default class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown(event) {
    console.log('handling a key press');
  }

  render() {
    return (
      <div tabIndex="0" onKeyDown={this.props.handleKeyDown}>Fooo</div>
    );
  }
}
