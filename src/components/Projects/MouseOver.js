import React, { Component } from 'react';


class MouseOver extends Component {
  constructor(props) {
    super(props);
    this.state = ({ words: "Don't Touch Me!"});
  }

  mouseOver() {
    this.setState({words: "You Touched Me!"});

  }
  mouseOut(){
    this.setState({words: "Don't Touch Me Again!"});
  }

  render() {
  	return (
      <div>
          <div onMouseOver={() => this.mouseOver()} >
            <div onMouseOut={() => this.mouseOut()}>
              {this.state.words}
              </div>
    	</div>
    </div>
  );
}
}
export default MouseOver;
