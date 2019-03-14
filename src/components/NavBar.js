import React from 'react';

export default class MyNavBar extends React.Component{
  render(){
    return(
      <div>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="/">Dac Dao</a>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <div>
      <a className="nav-item nav-link active" href="/aboutme">About Me <span className="sr-only">(current)</span></a>
      </div>
      <a className="nav-item nav-link" href="/projects">Projects</a>
      <a className="nav-item nav-link" href="/resume">Resume</a>
      <a className="nav-item nav-link" href="/contactme">Contact Me</a>
    </div>
  </div>
</nav>

</div>
    );
  }
}
