import React from 'react';
import './StickyFooter.css';

export default  class StickyFooter extends React.Component{
  render(){
    return(
      <div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </div>
    )
  }
}
